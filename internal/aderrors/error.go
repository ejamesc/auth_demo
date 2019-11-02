package aderrors

import (
	"errors"

	"github.com/sirupsen/logrus"
)

var ErrNoRecords = errors.New("No records found")

// StatusError represents an error with an associated HTTP status code.
type StatusError struct {
	Code   int   `json:"status"`
	Err    error `json:"-"`
	fields logrus.Fields
}

// APIStatusError is the error type returned for API errors
type APIStatusError struct {
	PublicMessage string `json:"message"`
	StatusError
}
