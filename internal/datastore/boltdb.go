package datastore

import (
	"runtime"
	"time"

	"github.com/boltdb/bolt"
	"github.com/sirupsen/logrus"
)

var (
	UserBucket         = []byte("user_bucket")
	SessionBucket      = []byte("session_bucket")
	sessionTokenBucket = []byte("session_token_bucket")
	userEmailBucket    = []byte("user_email_bucket")
	userUsernameBucket = []byte("user_username_bucket")
	TodoBucket         = []byte("todo_bucket")
	bucketsList        = [][]byte{UserBucket, SessionBucket, sessionTokenBucket, userEmailBucket, userUsernameBucket, TodoBucket}
)

type BDB struct {
	*bolt.DB
}

func (db *BDB) CreateAllBuckets() error {
	err := db.Update(func(tx *bolt.Tx) error {
		for _, b := range bucketsList {
			_, err := tx.CreateBucketIfNotExists(b)
			if err != nil {
				return err
			}
		}
		return nil
	})
	if err != nil {
		return err
	}
	return nil
}

func timeNow() time.Time {
	return time.Now().In(time.UTC)
}

var log = logrus.New()

// goSafely runs a given function safely in a new goroutine
func goSafely(fn func()) {
	go func() {
		defer func() {
			if err := recover(); err != nil {
				stack := make([]byte, 1024*8)
				stack = stack[:runtime.Stack(stack, false)]

				log.WithFields(logrus.Fields{
					"error": err,
					"stack": stack,
				}).Error("goroutine PANIC")
			}
		}()

		fn()
	}()
}
