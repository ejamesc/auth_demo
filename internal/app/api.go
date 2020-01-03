package app

import (
	"math/rand"
	"net/http"
	"strings"
	"time"

	"github.com/ejamesc/auth_demo/pkg/router"
	ulid "github.com/oklog/ulid/v2"
)

type Todo struct {
	ID     string `jsonapi:"primary,todo"`
	Name   string `jsonapi:"attr,name"`
	IsDone bool   `jsonapi:"attr,is_done"`
}

func tempGenerateULID() string {
	entropy := rand.New(rand.NewSource(time.Now().UTC().UnixNano()))
	return strings.ToLower(ulid.MustNew(ulid.Now(), entropy).String())
}

func serveAPITodo(env *Env) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		td := []*Todo{
			&Todo{ID: tempGenerateULID(), Name: "Some random todo", IsDone: false},
			&Todo{ID: tempGenerateULID(), Name: "Buy milk", IsDone: true},
		}
		env.loe(env.jsonAPI(w, http.StatusOK, td))
		return nil
	}
}
