package app

import (
	"context"
	"fmt"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/ejamesc/auth_demo/internal/aderrors"
	"github.com/ejamesc/auth_demo/internal/models"
	"github.com/ejamesc/auth_demo/pkg/router"

	"github.com/google/jsonapi"
	"github.com/sirupsen/logrus"
	"goji.io/middleware"
)

func logHandler(env *Env) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		fn := func(w http.ResponseWriter, r *http.Request) {
			t1 := timeNow()
			w2 := router.NewResponseWriter(w)

			next.ServeHTTP(w2, r)

			rw, ok := w2.(router.ResponseWriter)
			if !ok {
				env.log.Error("Unable to log due to invalid ResponseWriter conversion")
				return
			}
			if strings.Contains(r.URL.Path, "static") {
				return
			}
			tc := timeNow().Sub(t1)
			env.log.WithFields(logrus.Fields{
				"method": r.Method,
				"path":   r.URL.Path,
				"status": rw.Status(),
				"time":   tc,
			}).Info(
				fmt.Sprintf("Completed %s %s: %v %s in %v", r.Method, r.URL.Path, rw.Status(), http.StatusText(rw.Status()), tc))
		}
		return http.HandlerFunc(fn)
	}
}

func notFoundHandler(env *Env) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		fn := func(w http.ResponseWriter, r *http.Request) {
			ctx := r.Context()
			matchedHandler := middleware.Handler(ctx)
			// No match found
			if matchedHandler == nil {
				env.log.WithFields(logrus.Fields{
					"method": r.Method,
					"path":   r.URL.Path,
					"status": http.StatusNotFound,
				}).Info(
					fmt.Sprintf("Completed %s %s: %v %s", r.Method, r.URL.Path, http.StatusNotFound, http.StatusText(http.StatusNotFound)))

				env.rndr.Text(w, 404, "404 page not found")
			} else {
				next.ServeHTTP(w, r)
			}
		}
		return http.HandlerFunc(fn)
	}
}

// Attaches the user object to the context, if logged in
func userMiddleware(env *Env, adb models.SessionService) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		fn := func(w http.ResponseWriter, r *http.Request) {
			session, err := env.store.Get(r, sessionNameConst)
			if err != nil {
				env.log.WithField("error", err).Error("error retrieving session from store")
				next.ServeHTTP(w, r)
				return
			}
			sessionKey, ok := session.Values[sessionKeyConst]
			if !ok { // not logged in
				next.ServeHTTP(w, r)
				return
			}

			sID := sessionKey.(string)
			u, err := adb.GetUserBySessionID(sID)
			if err != nil {
				env.log.WithFields(logrus.Fields{
					"error":      err,
					"session_id": sID,
				}).Error("error getting user with session ID")
				delete(session.Values, sessionKey)
				session.Save(r, w)
				next.ServeHTTP(w, r)
				return
			}

			ctx := r.Context()
			ctx = context.WithValue(ctx, userKeyConst, u)
			r = r.WithContext(ctx)
			next.ServeHTTP(w, r)
		}
		return http.HandlerFunc(fn)
	}
}

// Auth middleware is the middleware wrapper to protect authentication endpoints.
// This has to be placed after the userMiddleware
func authMiddleware(env *Env) func(next router.HandlerError) router.HandlerError {
	return func(next router.HandlerError) router.HandlerError {
		fn := func(w http.ResponseWriter, r *http.Request) error {
			user := env.getUser(r)

			if user == nil {
				env.saveFlash(w, r, "You need to login to view that page!")
				http.Redirect(w, r, "/login", 302)
				return nil
			} else {
				return next(w, r)
			}
		}

		return fn
	}
}

// NOTE: 404s are not handled by the errorhandler below, because goji
// does 404s before the middleware stack. So we have to have an explicit
// middleware. See: https://github.com/goji/goji/issues/20
func handle404Middleware(env *Env) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		fn := func(w http.ResponseWriter, r *http.Request) {
			if middleware.Handler(r.Context()) == nil {
				lp := &localPresenter{PageTitle: "404 Page Not Found", PageURL: r.URL.String(), globalPresenter: env.gp}
				env.rndr.HTML(w, http.StatusNotFound, "404", lp)
			} else {
				next.ServeHTTP(w, r)
			}
		}
		return http.HandlerFunc(fn)
	}
}

func handle404APIMiddleware(env *Env) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		fn := func(w http.ResponseWriter, r *http.Request) {
			if middleware.Handler(r.Context()) == nil {
				errObj := &jsonapi.ErrorObject{
					Status: "404",
					Title:  "No such endpoint",
				}
				env.jsonAPIErr(w, http.StatusNotFound, []*jsonapi.ErrorObject{errObj})
			} else {
				next.ServeHTTP(w, r)
			}
		}
		return http.HandlerFunc(fn)
	}
}

func errorHandler(env *Env) router.ErrorHandler {
	return func(w http.ResponseWriter, r *http.Request, err error) {
		lp := &localPresenter{PageTitle: "500 Internal Server Error", PageURL: r.URL.String(), globalPresenter: env.gp}

		switch e := err.(type) {
		case aderrors.StatusError:
			// No router 404 errors will be processed here, because Goji requires 404s to be captured at the middleware layer.
			if e.Status() == 500 {
				env.rndr.HTML(w, e.Status(), "500", lp)
			}
			env.log.WithFields(e.Fields()).Error(e)
		default:
			// Any error types we don't specifically look out for default to serving a terrible HTTP 500
			//
			env.log.Error(e)
			env.rndr.HTML(w, http.StatusInternalServerError, "500", lp)
		}
	}
}

func apiErrorHandler(env *Env) router.ErrorHandler {
	return func(w http.ResponseWriter, r *http.Request, err error) {
		switch e := err.(type) {
		case aderrors.APIStatusError:
			env.log.WithFields(e.Fields()).Error(e)
			errObj := &jsonapi.ErrorObject{
				Status: strconv.Itoa(e.Status()),
				Title:  e.PublicMessage,
			}
			env.jsonAPIErr(w, e.Status(), []*jsonapi.ErrorObject{errObj})
		default:
			env.log.Error(e)
			env.rndr.JSON(w, http.StatusInternalServerError, e)
		}
	}
}

func timeNow() time.Time {
	return time.Now().In(time.UTC)
}
