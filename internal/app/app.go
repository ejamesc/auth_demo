package app

import (
	"net/http"

	"github.com/ejamesc/auth_demo/pkg/router"
	"goji.io/pat"

	"github.com/unrolled/render"
)

type Env struct {
	rndr *render.Render
	gp   *globalPresenter
}

func NewEnv(templatesPath string) *Env {
	e := &Env{
		rndr: render.New(render.Options{
			Directory:     templatesPath,
			Extensions:    []string{".html"},
			Layout:        "base",
			IsDevelopment: true,
		}),
		gp: getGlobalPresenter(),
	}
	return e
}

func NewRouter(staticFilePath string, env *Env) *router.Router {
	fakeErrHandler := func(w http.ResponseWriter, req *http.Request, err error) {
	}
	router := router.New(fakeErrHandler, fakeErrHandler)
	router.HandleE(pat.Get("/"), serveExternalHome(env))

	return router
}

func serveExternalHome(env *Env) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		env.rndr.Text(w, http.StatusOK, "hello world")
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
