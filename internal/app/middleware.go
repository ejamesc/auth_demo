package app

import (
	"fmt"
	"net/http"
	"strings"
	"time"

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

func timeNow() time.Time {
	return time.Now().In(time.UTC)
}
