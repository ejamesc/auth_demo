package app

import (
	"context"
	"fmt"
	"net/http"
	"strings"
	"time"

	"github.com/ejamesc/auth_demo/internal/models"
	"github.com/ejamesc/auth_demo/pkg/router"

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

func timeNow() time.Time {
	return time.Now().In(time.UTC)
}
