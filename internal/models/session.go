package models

import (
	"time"

	uuid "github.com/satori/go.uuid"
)

type SessionService interface {
	GetSession(id string) (*Session, error)
	GetUserBySessionID(sessionID string) (*User, error)
	CreateSession(userID string) (*Session, error)
	DeleteSession(id string) (bool, error)
	GetUserByEmail(email string) (*User, error)
	GetUserByUsername(username string) (*User, error)
	CreateUser(user *User) (bool, error)
}

// Session contains the session data. It associates a user with a session ID.
type Session struct {
	ID           string    `json:"id"`
	Token        string    `json:"token"`
	UserID       string    `json:"user_id" db:"user_id"`
	LoginTime    time.Time `json:"login_time" db:"login_time"`
	LastSeenTime time.Time `json:"last_seen_time" db:"last_seen_time"`
}

func (s *Session) GenerateID() {
	s.ID = generateULID()
}

func (s *Session) GenerateToken() {
	s.Token = uuid.NewV4().String()
}
