package app

import (
	"fmt"
	"net/http"
	"net/url"

	"github.com/boltdb/bolt"
	"github.com/ejamesc/auth_demo/internal/datastore"

	"github.com/ejamesc/auth_demo/pkg/router"
	"goji.io/pat"
)

var pdb *datastore.BDB

func SetDB(db *bolt.DB) error {
	if db == nil {
		return fmt.Errorf("boltdb is nil")
	}
	pdb = &datastore.BDB{DB: db}
	err := pdb.CreateAllBuckets()
	if err != nil {
		return fmt.Errorf("unable to create all buckets: %w", err)
	}
	return nil
}

// NewRouter creates a new router
func NewRouter(staticFilePath string, env *Env) *router.Router {
	ustore := &datastore.UserStore{BDB: pdb}
	sessionStore := &datastore.SessionStore{BDB: pdb, UserStore: ustore}
	fakeErrHandler := func(w http.ResponseWriter, req *http.Request, err error) {
		env.log.Error(err)
	}

	router := router.New(fakeErrHandler, fakeErrHandler)

	router.Use(notFoundHandler(env))
	router.Use(logHandler(env))
	router.Use(userMiddleware(env, sessionStore))

	authM := authMiddleware(env)

	router.HandleE(pat.Get("/"), serveExternalHome(env))
	router.HandleE(pat.Get("/c"), authM(serveSPA(env)))
	router.HandleE(pat.Get("/login"), serveLogin(env))
	router.HandleE(pat.Post("/login"), servePostLogin(env, sessionStore))
	router.HandleE(pat.Get("/signup"), serveSignup(env))
	router.HandleE(pat.Post("/signup"), servePostSignup(env, sessionStore))
	router.Handle(pat.Get("/static/*"), http.FileServer(http.Dir(staticFilePath)))

	router.HandleE(pat.Post("/api/login"), servePostLogin(env, sessionStore))

	return router
}

func serveExternalHome(env *Env) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		env.rndr.Text(w, http.StatusOK, "home page")
		return nil
	}
}

func serveSPA(env *Env) router.HandlerError {
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

func (lp localPresenter) Description() string {
	if lp.LocalDescription != "" {
		return lp.LocalDescription
	} else {
		return lp.globalPresenter.DefaultDescription
	}
}

func (lp localPresenter) URL() string {
	pageURL := lp.PageURL
	if len(pageURL) > 0 && pageURL[0] == '/' {
		pageURL = pageURL[1:]
	}
	u, err := url.Parse(fmt.Sprintf("%s/%s", lp.SiteURL, pageURL))
	if err != nil {
		return lp.SiteURL
	}
	return u.String()
}

func (lp localPresenter) Title() string {
	if lp.PageTitle == "" {
		return lp.SiteName
	} else {
		return fmt.Sprintf("%s · %s", lp.PageTitle, lp.SiteName)
	}
}

func printStruct(in interface{}) string {
	return fmt.Sprintf("%+v", in)
}
