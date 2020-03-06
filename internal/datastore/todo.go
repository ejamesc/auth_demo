package datastore

import (
	"bytes"
	"fmt"

	"github.com/boltdb/bolt"
	"github.com/ejamesc/auth_demo/internal/aderrors"
	"github.com/ejamesc/auth_demo/internal/models"
	"github.com/ejamesc/jsonapi"
	null "gopkg.in/guregu/null.v3"
)

type TodoStore struct{ *BDB }

func (tdstr *TodoStore) Get(id string) (*models.Todo, error) {
	var todo models.Todo
	err := tdstr.View(func(tx *bolt.Tx) error {
		b := tx.Bucket(TodoBucket)
		if b == nil {
			return fmt.Errorf("no %s bucket exists", string(TodoBucket))
		}
		tJSON := b.Get([]byte(id))
		if tJSON == nil {
			return aderrors.ErrNoRecords
		}
		return jsonapi.UnmarshalPayload(bytes.NewReader(tJSON), &todo)
	})
	if err != nil {
		return nil, err
	}
	return &todo, nil
}

func (tdstr *TodoStore) Create(td *models.Todo) (bool, error) {
	// Validations
	if td.ID == "" {
		return false, aderrors.ErrNoID
	}
	if t, _ := tdstr.Get(td.ID); t != nil {
		return false, aderrors.ErrAlreadyExists
	}

	td.DateCreated = null.NewTime(timeNow(), true)
	err := tdstr.Update(func(tx *bolt.Tx) error {
		b := tx.Bucket(TodoBucket)
		if b == nil {
			return fmt.Errorf("no %s bucket exists", string(TodoBucket))
		}
		var buf bytes.Buffer
		err := jsonapi.MarshalPayload(&buf, td)
		if err != nil {
			return err
		}
		return b.Put([]byte(td.ID), buf.Bytes())
	})
	if err != nil {
		return false, fmt.Errorf("error saving todo item: %w", err)
	}

	return true, nil
}
