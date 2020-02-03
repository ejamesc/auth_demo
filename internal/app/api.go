package app

import (
	"math/rand"
	"net/http"
	"strings"
	"time"

	"github.com/ejamesc/auth_demo/internal/aderrors"
	"github.com/ejamesc/auth_demo/pkg/router"
	ulid "github.com/oklog/ulid/v2"
	null "gopkg.in/guregu/null.v3"
)

// DemoTodo is a demo struct to demonstrate how to do null pointers
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
		if !isJSONAPIMediaType(r) {
			return aderrors.ErrNotJSONAPIMediaType
		}
		td := []*DemoTodo{
			&DemoTodo{ID: tempGenerateULID(), Name: nsp(null.StringFrom("Some random todo")), IsDone: null.BoolFrom(false)},
			&DemoTodo{ID: tempGenerateULID(), Name: nsp(null.NewString("", false)), IsDone: null.BoolFrom(true)},
			&DemoTodo{ID: tempGenerateULID(), Name: nil, IsDone: null.BoolFrom(true)},
		}
		env.loe(env.jsonAPI(w, http.StatusOK, td))
		return nil
	}
}

func serveCreateAPITodo(env *Env) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		return nil
	}
}
