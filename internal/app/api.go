package app

import (
	"math/rand"
	"net/http"
	"strings"
	"time"

	"github.com/ejamesc/auth_demo/pkg/router"
	ulid "github.com/oklog/ulid/v2"
	null "gopkg.in/guregu/null.v3"
)

type Todo struct {
	ID     string       `jsonapi:"primary,todo"`
	Name   *null.String `jsonapi:"attr,name,omitempty"`
	IsDone null.Bool    `jsonapi:"attr,is_done"`
}

func tempGenerateULID() string {
	entropy := rand.New(rand.NewSource(time.Now().UTC().UnixNano()))
	return strings.ToLower(ulid.MustNew(ulid.Now(), entropy).String())
}

func nsp(ns null.String) *null.String {
	return &ns
}

func serveAPITodo(env *Env) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		td := []*Todo{
			&Todo{ID: tempGenerateULID(), Name: nsp(null.StringFrom("Some random todo")), IsDone: null.BoolFrom(false)},
			&Todo{ID: tempGenerateULID(), Name: nsp(null.NewString("", false)), IsDone: null.BoolFrom(true)},
			&Todo{ID: tempGenerateULID(), Name: nil, IsDone: null.BoolFrom(true)},
		}
		env.loe(env.jsonAPI(w, http.StatusOK, td))
		return nil
	}
}
