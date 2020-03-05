package models

import (
	null "gopkg.in/guregu/null.v3"
)

type TodoService interface {
	Get(id string) (*Todo, error)
	Create(*Todo) (bool, error)
	//Update(*Todo) (bool, error)
	//Delete(id string) (bool, error)
}

type Todo struct {
	ID          string      `jsonapi:"primary,todo"`
	Name        null.String `jsonapi:"attr,name"`
	IsDone      null.Bool   `jsonapi:"attr,is_done"`
	DateCreated null.Time   `jsonapi:"attr,date_created"`
}

func (t *Todo) GenerateID() {
	t.ID = generateULID()
}
