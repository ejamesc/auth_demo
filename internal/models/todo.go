package models

import "time"

type TodoService interface {
	Get(id string) (*Todo, error)
	Create(*Todo) (bool, error)
	//Update(*Todo) (bool, error)
	//Delete(id string) (bool, error)
}

type Todo struct {
	ID          string    `json:"id"`
	Name        string    `json:"name"`
	IsDone      bool      `json:"is_done"`
	DateCreated time.Time `json:"date_created"`
}

func (t *Todo) GenerateID() {
	t.ID = generateULID()
}
