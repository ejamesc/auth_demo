package app

import (
	"fmt"
	"math/rand"
	"net/http"
	"strings"
	"time"

	"github.com/ejamesc/jsonapi"

	"github.com/ejamesc/auth_demo/internal/aderrors"
	"github.com/ejamesc/auth_demo/internal/models"
	"github.com/ejamesc/auth_demo/pkg/router"
	ulid "github.com/oklog/ulid/v2"
	null "gopkg.in/guregu/null.v3"
)

// DemoTodo is a demo struct to demonstrate how to do null pointers
// In this case Name is omitted completely if it's a null pointer
// Example init: &DemoTodo{ID: tempGenerateULID(), Name: nsp(null.StringFrom("Some random todo")), IsDone: null.BoolFrom(false)},
type DemoTodo struct {
	ID     string       `jsonapi:"primary,todo"`
	Name   *null.String `jsonapi:"attr,name,omitempty"`
	IsDone null.Bool    `jsonapi:"attr,is_done"`
}

func tempGenerateULID() string {
	entropy := rand.New(rand.NewSource(time.Now().UTC().UnixNano()))
	return strings.ToLower(ulid.MustNew(ulid.Now(), entropy).String())
}

func nsp(ns null.String) *null.String {
	if ns.IsZero() {
		return nil
	}
	return &ns
}

func serveAPITodo(env *Env) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		td := []*models.Todo{
			&models.Todo{ID: tempGenerateULID(), Name: null.StringFrom("Some random todo"), IsDone: null.BoolFrom(false), DateCreated: null.NewTime(timeNow(), true)},
			&models.Todo{ID: tempGenerateULID(), Name: null.NewString("", false), IsDone: null.BoolFrom(true), DateCreated: null.NewTime(timeNow(), true)},
			&models.Todo{ID: tempGenerateULID(), Name: null.NewString("", true), IsDone: null.BoolFrom(true), DateCreated: null.NewTime(timeNow(), true)},
		}
		env.loe(env.jsonAPI(w, http.StatusOK, td))
		return nil
	}
}

func serveCreateAPITodo(env *Env, tdserv models.TodoService) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		todo := new(models.Todo)
		r.Body = http.MaxBytesReader(w, r.Body, 1048576) // TODO: refactor to own method
		if err := jsonapi.UnmarshalPayload(r.Body, todo); err != nil {
			return aderrors.New500APIError(fmt.Errorf("error unmarshalling jsonapi: %w", err))
		}
		env.log.Infof("%+v", todo)
		_, err := tdserv.Create(todo)
		if err != nil {
			return fmt.Errorf("error creating todo: %w", err)
		}
		env.loe(env.jsonAPI(w, http.StatusCreated, todo))
		td2, err := tdserv.Get(todo.ID)
		env.log.Infof("%+v", td2)
		return nil
	}
}
