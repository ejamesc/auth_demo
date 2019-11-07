package aderrors

import (
	"errors"
	"fmt"
	"strings"

	"github.com/sirupsen/logrus"
)

var ErrNoRecords = errors.New("No records found")

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
	return NewError(500, msg, err)
}

func New404Error(msg string, err error) StatusError {
	return NewError(404, msg, err)
}

func NewAPIError(code int, publicMsg string, err error) APIStatusError {
	se := NewError(code, publicMsg, err)
	return APIStatusError{PublicMessage: publicMsg, StatusError: se}
}
