package app

import (
	"fmt"
	"net/http"
	"net/url"

	"github.com/boltdb/bolt"
	"github.com/ejamesc/auth_demo/internal/datastore"
	"github.com/gorilla/csrf"

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
	tdstore := &datastore.TodoStore{BDB: pdb}
	fakeErrHandler := func(w http.ResponseWriter, req *http.Request, err error) {
		env.log.Errorf("%+v", err)
	}
	errHandler := errorHandler(env)
	apiErrHandler := apiErrorHandler(env)

	rter := router.New(errHandler, fakeErrHandler)
	rter.Use(handle404Middleware(env)) // goji only handles 404s here
	rter.Use(logHandler(env))
	rter.Use(userMiddleware(env, sessionStore))

	authM := authMiddleware(env)

	// TODO: csrf.Secure(false) should not be set during production
	csrfAPIMdware := csrf.Protect(
		[]byte(csrfSecretKey),
		csrf.Secure(false),
		csrf.ErrorHandler(csrfErrHandler(env)),
	)

	rter.HandleE(pat.Get("/"), serveExternalHome(env))
	rter.HandleE(pat.Get("/c"), authM(serveSPA(env, csrfAPIMdware)))
	rter.HandleE(pat.Get("/card"), authM(serveSPA(env, csrfAPIMdware)))
	rter.HandleE(pat.Get("/login"), serveLogin(env))
	rter.HandleE(pat.Post("/login"), servePostLogin(env, sessionStore))
	rter.HandleE(pat.Get("/signup"), serveSignup(env))
	rter.HandleE(pat.Post("/signup"), servePostSignup(env, sessionStore))
	rter.Handle(pat.Get("/static/*"), http.FileServer(http.Dir(staticFilePath)))

	apiRtr := router.NewSubMux(apiErrHandler, fakeErrHandler)
	apiRtr.Use(handle404APIMiddleware(env))

	v1Rtr := router.NewSubMux(apiErrHandler, fakeErrHandler)
	v1Rtr.Use(handle404APIMiddleware(env))
	v1Rtr.Use(jsonAPIMiddleware(env))

	v1Rtr.Use(csrfMiddleware(csrfAPIMdware))

	rter.Handle(pat.New("/api/*"), apiRtr)
	apiRtr.Handle(pat.New("/v1/*"), v1Rtr)

	apiAuth := authAPIMiddleware(env, sessionStore)
	v1Rtr.HandleE(pat.Post("/login"), serveAPIPostLogin(env, sessionStore))
	v1Rtr.HandleE(pat.Get("/todos"), apiAuth(serveAPITodo(env)))
	v1Rtr.HandleE(pat.Post("/todos"), apiAuth(serveCreateAPITodo(env, tdstore)))

	return rter
}

func serveExternalHome(env *Env) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		env.rndr.Text(w, http.StatusOK, "home page")
		return nil
	}
}

func serveSPA(env *Env, csrfmdware func(http.Handler) http.Handler) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		h := csrfmdware(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			lp := &localPresenter{
				globalPresenter: env.gp,
				CSRFToken:       csrf.Token(r),
			}
			env.loe(env.spaRndr.HTML(w, http.StatusOK, "spa", lp))
		}))
		h.ServeHTTP(w, r)
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
	CSRFToken        string
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
