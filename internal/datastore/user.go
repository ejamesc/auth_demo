package datastore

import (
	"encoding/json"
	"errors"
	"fmt"

	"github.com/ejamesc/auth_demo/internal/aderrors"
	"github.com/ejamesc/auth_demo/internal/models"

	"github.com/boltdb/bolt"
)

type UserStore struct{ *BDB }

func (u *UserStore) Get(id string) (*models.User, error) {
	var user models.User
	err := u.View(func(tx *bolt.Tx) error {
		b := tx.Bucket(UserBucket)
		if b == nil {
			return fmt.Errorf("no %s bucket exists", string(UserBucket))
		}
		uJSON := b.Get([]byte(id))
		if uJSON == nil {
			return aderrors.ErrNoRecords
		}
		return json.Unmarshal(uJSON, &user)
	})
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func (u *UserStore) GetByEmail(email string) (*models.User, error) {
	var user models.User
	err := u.View(func(tx *bolt.Tx) error {
		b := tx.Bucket(UserBucket)
		be := tx.Bucket(userEmailBucket)
		if b == nil {
			return fmt.Errorf("no %s bucket exists", string(UserBucket))
		}
		if be == nil {
			return fmt.Errorf("no %s bucket exists", string(userEmailBucket))
		}

		id := be.Get([]byte(email))
		if id == nil {
			return aderrors.ErrNoRecords
		}

		uJSON := b.Get(id)
		if uJSON == nil {
			return aderrors.ErrNoRecords
		}
		return json.Unmarshal(uJSON, &user)
	})
	if err != nil {
		if err == aderrors.ErrNoRecords {
			return nil, err
		}
		return nil, fmt.Errorf("error retrieving user id with email %s: %w", email, err)
	}
	return &user, nil
}

func (u *UserStore) GetByUsername(username string) (*models.User, error) {
	var user models.User
	err := u.View(func(tx *bolt.Tx) error {
		b := tx.Bucket(UserBucket)
		bu := tx.Bucket(userUsernameBucket)
		if b == nil {
			return fmt.Errorf("no %s bucket exists", string(UserBucket))
		}
		if bu == nil {
			return fmt.Errorf("no %s bucket exists", string(userUsernameBucket))
		}

		id := bu.Get([]byte(username))
		if id == nil {
			return aderrors.ErrNoRecords
		}

		uJSON := b.Get(id)
		if uJSON == nil {
			return aderrors.ErrNoRecords
		}
		return json.Unmarshal(uJSON, &user)
	})
	if err != nil {
		if err == aderrors.ErrNoRecords {
			return nil, err
		}
		return nil, fmt.Errorf("error retrieving user id with username %s: %w", username, err)
	}
	return &user, nil
}

// Creates the user.
func (u *UserStore) Create(usr *models.User) (bool, error) {
	oldUser, err := u.Get(usr.ID)
	if err != nil && err != aderrors.ErrNoRecords {
		return false, fmt.Errorf("user id %s exists: %w", usr.ID, err)
	}
	if oldUser != nil {
		return false, errors.New("id already exists")
	}

	// Validations
	if usr.ID == "" || usr.Email == "" || usr.Password == "" {
		return false, errors.New("either id, password or email is empty, cannot save")
	}

	usr.DateCreated = timeNow()
	err = u.Update(func(tx *bolt.Tx) error {
		b := tx.Bucket(UserBucket)
		if b == nil {
			return fmt.Errorf("no %s bucket exists", string(UserBucket))
		}

		uJSON, err := json.Marshal(usr)
		if err != nil {
			return err
		}
		return b.Put([]byte(usr.ID), uJSON)
	})
	if err != nil {
		return false, fmt.Errorf("error saving user: %w", err)
	}
	err = u.Update(func(tx *bolt.Tx) error {
		b := tx.Bucket(userEmailBucket)
		if b == nil {
			return fmt.Errorf("no %s bucket exists", string(userEmailBucket))
		}
		return b.Put([]byte(usr.Email), []byte(usr.ID))
	})
	if err != nil {
		return false, fmt.Errorf("error saving user email or username association: %w", err)
	}

	return true, nil
}
