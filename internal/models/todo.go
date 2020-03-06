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
	ID          string      `json:"id" jsonapi:"primary,todo"`
	Name        null.String `json:"name" jsonapi:"attr,name"`
	IsDone      null.Bool   `json:"is_done" jsonapi:"attr,is_done"`
	DateCreated null.Time   `json:"date_created" jsonapi:"attr,date_created"`
}

func (t *Todo) GenerateID() {
	t.ID = generateULID()
}
