package app

import (
	"net/http"

	"github.com/ejamesc/auth_demo/pkg/router"
	"goji.io/pat"
)

// NewRouter creates a new router
func NewRouter(staticFilePath string, env *Env) *router.Router {
	fakeErrHandler := func(w http.ResponseWriter, req *http.Request, err error) {
		env.log.Error(err)
	}

	router := router.New(fakeErrHandler, fakeErrHandler)

	router.Use(notFoundHandler(env))
	router.Use(logHandler(env))

	router.HandleE(pat.Get("/"), serveExternalHome(env))
	router.HandleE(pat.Get("/login"), serveLogin(env))
	router.HandleE(pat.Get("/signup"), serveSignup(env))
	router.Handle(pat.Get("/static/*"), http.FileServer(http.Dir(staticFilePath)))

	return router
}

func serveExternalHome(env *Env) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		env.spaRndr.HTML(w, http.StatusOK, "spa", "hello world")
		return nil
	}
}

func getGlobalPresenter() *globalPresenter {
	return &globalPresenter{
		SiteName:           "Golang Auth Test",
		DefaultDescription: "This is a demo for SPA auth in Go and Mithril",
		SiteURL:            "localhost:8090",
	}
}

// globalPresenter contains the fields necessary for presenting in all templates
type globalPresenter struct {
	SiteName           string
	DefaultDescription string
	SiteURL            string
}

// localPresenter contains the fields necessary for specific pages.
type localPresenter struct {
	PageTitle        string
	PageURL          string
	LocalDescription string
	Flashes          []interface{}
	*globalPresenter
}
