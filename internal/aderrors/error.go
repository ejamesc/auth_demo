package aderrors

import (
	"errors"
	"fmt"
	"net/http"
	"strings"

	"github.com/sirupsen/logrus"
)

var ErrNoRecords = errors.New("No records found")
var ErrNoID = errors.New("No ID supplied")
var ErrAlreadyExists = errors.New("Entity already exists")

// StatusError represents an error with an associated HTTP status code.
type StatusError struct {
	Code   int   `json:"status"`
	Err    error `json:"-"`
	fields logrus.Fields
}

// Allows StatusError to satisfy the error interface.
func (se StatusError) Error() string {
	return se.Err.Error()
}

// Returns our HTTP status code.
func (se StatusError) Status() int {
	return se.Code
}

// Returns Fields
func (se StatusError) Fields() logrus.Fields {
	if se.fields == nil {
		se.fields = logrus.Fields{}
	}
	se.fields["status"] = se.Code
	return se.fields
}

// WithFields adds logrus Fields for debugging
func (se StatusError) WithFields(f logrus.Fields) StatusError {
	se.fields = f
	return se
}

// APIStatusError is the error type returned for API errors
type APIStatusError struct {
	PublicMessage string `json:"message"`
	StatusError
}

func (ase APIStatusError) WithFields(f logrus.Fields) APIStatusError {
	ase.fields = f
	return ase
}

// NewError creates a new StatusError.
// msg may contain %w, otherwise, it will be appended for you
func NewError(code int, msg string, err error) StatusError {
	if err != nil {
		if !strings.Contains(msg, "%w") {
			msg = msg + ": %w"
		}
		return StatusError{Code: code, Err: fmt.Errorf(msg, err)}
	} else {
		return StatusError{Code: code, Err: errors.New(msg)}
	}
}

func New500Error(msg string, err error) StatusError {
	return NewError(http.StatusInternalServerError, msg, err)
}

func New404Error(msg string, err error) StatusError {
	return NewError(http.StatusNotFound, msg, err)
}

func NewAPIError(code int, publicMsg string, err error) APIStatusError {
	se := StatusError{
		Code: code,
		Err:  err,
	}
	return APIStatusError{PublicMessage: publicMsg, StatusError: se}
}

func New500APIError(err error) APIStatusError {
	se := StatusError{Code: http.StatusInternalServerError, Err: err}
	return APIStatusError{
		PublicMessage: "Internal server error",
		StatusError:   se,
	}
}

func New401APIError(err error) APIStatusError {
	return NewAPIError(http.StatusUnauthorized, "Unauthorized", err)
}
