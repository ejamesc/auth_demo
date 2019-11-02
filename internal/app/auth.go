package app

import (
	"net/http"

	"github.com/ejamesc/auth_demo/pkg/router"
)

func serveLogin(env *Env) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		if u := env.getUser(r); u != nil {
			http.Redirect(w, r, "/w", http.StatusFound)
			return nil
		}

		fs := env.getFlash(w, r)
		lp := &localPresenter{
			PageTitle:       "Login",
			PageURL:         "/login",
			Flashes:         fs,
			globalPresenter: env.gp,
		}
		env.rndr.HTML(w, http.StatusOK, "login", lp)
		return nil
	}
}

func serveSignup(env *Env) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		if u := env.getUser(r); u != nil {
			http.Redirect(w, r, "/w", http.StatusFound)
			return nil
		}
		fs := env.getFlash(w, r)
		lp := &localPresenter{
			PageTitle:       "Sign Up",
			PageURL:         "/signup",
			Flashes:         fs,
			globalPresenter: env.gp,
		}
		env.rndr.HTML(w, http.StatusOK, "signup", lp)
		return nil
	}
}
