package app

import (
	"net/http"

	"github.com/ejamesc/auth_demo/internal/models"

	"github.com/ejamesc/jsonapi"
	"github.com/gorilla/sessions"
	"github.com/sirupsen/logrus"
	"github.com/unrolled/render"
)

type Env struct {
	rndr    *render.Render
	spaRndr *render.Render
	gp      *globalPresenter
	log     *logrus.Logger
	store   *sessions.CookieStore
}

func NewEnv(logr *logrus.Logger, templatesPath string) *Env {
	renderOpts := render.Options{
		Directory:     templatesPath,
		Extensions:    []string{".html"},
		Layout:        "base",
		IsDevelopment: true,
	}
	e := &Env{
		rndr:  render.New(renderOpts),
		log:   logr,
		gp:    getGlobalPresenter(),
		store: sessions.NewCookieStore([]byte(cookieSecretKey)),
	}

	renderOpts.Layout = ""
	e.spaRndr = render.New(renderOpts)
	return e
}

func (e *Env) getFlash(w http.ResponseWriter, r *http.Request) []interface{} {
	session, _ := e.store.Get(r, sessionNameConst)
	fs := session.Flashes()
	session.Save(r, w)
	return fs
}

func (e *Env) getUser(r *http.Request) *models.User {
	u := r.Context().Value(userKeyConst)
	if u == nil {
		return nil
	}
	user, ok := u.(*models.User)
	if !ok {
		e.log.WithField("user_from_context", u).Error(
			"error typecasting models.User in getUser")
		return nil
	}
	return user
}

func (e *Env) saveFlash(w http.ResponseWriter, req *http.Request, msg string) error {
	session, err := e.store.Get(req, sessionNameConst)
	if err != nil {
		return err
	}
	session.AddFlash(msg)
	err = session.Save(req, w)
	if err != nil {
		return err
	}

	return nil
}

// loe stands for 'log on error'
func (e *Env) loe(err error) {
	if err != nil {
		e.log.Warn(err)
	}
}

func (e *Env) jsonAPI(w http.ResponseWriter, statusCode int, obj interface{}) error {
	w.Header().Set("Content-Type", jsonapi.MediaType)
	w.WriteHeader(statusCode)
	return jsonapi.MarshalPayload(w, obj)
}

func (e *Env) jsonAPIErr(w http.ResponseWriter, statusCode int, errorObjs []*jsonapi.ErrorObject) error {
	w.Header().Set("Content-Type", jsonapi.MediaType)
	w.WriteHeader(statusCode)
	return jsonapi.MarshalErrors(w, errorObjs)
}
