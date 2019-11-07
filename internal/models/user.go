package models

// User is a Commoncog user.
import (
	"crypto/md5"
	"database/sql/driver"
	"encoding/hex"
	"encoding/json"
	"errors"
	"fmt"
	"math/rand"
	"strings"
	"time"

	ulid "github.com/oklog/ulid/v2"
	"golang.org/x/crypto/bcrypt"
)

const PasswordWorkfactor = 12

type UserService interface {
	Get(id string) (*User, error)
	GetByEmail(email string) (*User, error)
	Create(*User) (bool, error)
}

type User struct {
	ID          string        `json:"id"`
	Username    string        `json:"username"`
	Email       string        `json:"email"`
	Password    string        `json:"password"`
	Name        string        `json:"name"`
	URL         string        `json:"url"`
	Bio         string        `json:"bio"`
	DateCreated time.Time     `json:"date_created" db:"date_created"`
	D           *UserMetadata `json:"d" db:"data"`
}

type UserMetadata struct {
	HasSaved    bool `json:"has_saved"`
	IsFirstTime bool `json:"is_first_time"`
	IsAdmin     bool `json:"is_admin"`
}

// Value satisfies the driver.Valuer interface for db/sql
func (um *UserMetadata) Value() (driver.Value, error) {
	j, err := json.Marshal(um)
	if err != nil {
		return nil, fmt.Errorf("error marshalling UserMetadata for driver.Value: %w", err)

	}
	return j, nil
}

// Scan satisfies the scanner interface for db/sql
func (um *UserMetadata) Scan(src interface{}) error {
	source, ok := src.([]byte)
	if !ok {
		return errors.New("scan on UserMetadata: type assertion to []byte failed")
	}

	err := json.Unmarshal(source, um)
	if err != nil {
		return fmt.Errorf("error while unmarshalling from JSON in Scan: %w", err)
	}
	return nil
}

func (u *User) GenerateID() {
	u.ID = generateULID()
}

func (u *User) GravatarHash() string {
	em := strings.TrimSpace(strings.ToLower(u.Email))
	res := md5.Sum([]byte(em))
	return hex.EncodeToString(res[:])
}

func (u *User) SetPassword(pass string) error {
	if pass == "" {
		return fmt.Errorf("empty password given as input")
	}
	ps, err := bcrypt.GenerateFromPassword([]byte(pass), PasswordWorkfactor)
	if err != nil {
		return fmt.Errorf("error bcrypting password: %w", err)
	}
	u.Password = string(ps)
	return nil
}

func (u *User) CheckPassword(pass string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(u.Password), []byte(pass))
	return (err == nil)
}

func generateULID() string {
	entropy := rand.New(rand.NewSource(time.Now().UTC().UnixNano()))
	return strings.ToLower(ulid.MustNew(ulid.Now(), entropy).String())
}
