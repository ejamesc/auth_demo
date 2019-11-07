package datastore

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/boltdb/bolt"
	"github.com/ejamesc/auth_demo/internal/aderrors"
	"github.com/ejamesc/auth_demo/internal/models"
)

type SessionStore struct {
	UserStore *UserStore
	*BDB
}

func (ss *SessionStore) GetUserByEmail(email string) (*models.User, error) {
	return ss.UserStore.GetByEmail(email)
}

func (ss *SessionStore) GetUserByUsername(username string) (*models.User, error) {
	return ss.UserStore.GetByUsername(username)
}

func (ss *SessionStore) CreateUser(user *models.User) (bool, error) {
	return ss.UserStore.Create(user)
}

func (ss *SessionStore) GetSession(id string) (*models.Session, error) {
	var sess models.Session
	err := ss.View(func(tx *bolt.Tx) error {
		b := tx.Bucket(SessionBucket)
		if b == nil {
			return fmt.Errorf("no %s bucket exists", string(SessionBucket))
		}
		sJSON := b.Get([]byte(id))
		if sJSON == nil {
			return aderrors.ErrNoRecords
		}
		return json.Unmarshal(sJSON, &sess)
	})
	if err != nil {
		return nil, err
	}
	return &sess, nil
}

func (ss *SessionStore) GetUserBySessionID(sessionID string) (*models.User, error) {
	sess, err := ss.GetSession(sessionID)
	if err != nil {
		return nil, fmt.Errorf("error while SessionStore.GetUser: %w", err)
	}
	usr, err := ss.UserStore.Get(sess.UserID)
	if err != nil {
		return nil, fmt.Errorf("error while SessionStore.GetUser: %w", err)
	}

	goSafely(func() { ss.updateLastSeenTime(sess, timeNow()) })

	return usr, nil
}

func (ss *SessionStore) CreateSession(userID string) (*models.Session, error) {
	usr, err := ss.UserStore.Get(userID)
	if err != nil || usr == nil {
		return nil, fmt.Errorf("error retrieving user with id %s: %w", userID, err)
	}

	sess := models.Session{
		UserID:       userID,
		LoginTime:    timeNow(),
		LastSeenTime: timeNow(),
	}
	sess.GenerateID()
	err = ss.Update(func(tx *bolt.Tx) error {
		b := tx.Bucket(SessionBucket)
		if b == nil {
			return fmt.Errorf("no %s bucket exists", string(SessionBucket))
		}

		sJSON, err := json.Marshal(sess)
		if err != nil {
			return err
		}
		return b.Put([]byte(sess.ID), sJSON)
	})
	if err != nil {
		return nil, fmt.Errorf("error creating session: %w", err)
	}

	return &sess, nil
}

func (ss *SessionStore) DeleteSession(id string) (bool, error) {
	err := ss.Update(func(tx *bolt.Tx) error {
		b := tx.Bucket(SessionBucket)
		if b == nil {
			return fmt.Errorf("no %s bucket exists", string(SessionBucket))
		}

		return b.Delete([]byte(id))
	})
	if err != nil {
		return false, fmt.Errorf("error deleting session %s: %w", id, err)
	}
	return true, nil
}

func (ss *SessionStore) updateLastSeenTime(sess *models.Session, tt time.Time) (bool, error) {
	sess.LastSeenTime = tt

	err := ss.Update(func(tx *bolt.Tx) error {
		b := tx.Bucket(SessionBucket)
		if b == nil {
			return fmt.Errorf("no %s bucket exists", string(SessionBucket))
		}

		sJSON, err := json.Marshal(sess)
		if err != nil {
			return err
		}
		return b.Put([]byte(sess.ID), sJSON)
	})
	if err != nil {
		return false, fmt.Errorf("error updating session LastSeenTime: %w", err)
	}

	return true, nil
}
