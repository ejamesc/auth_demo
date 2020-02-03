package app

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"

	"github.com/ejamesc/auth_demo/internal/aderrors"
	"github.com/golang/gddo/httputil/header"
	"github.com/google/jsonapi"
)

func timeNow() time.Time {
	return time.Now().In(time.UTC)
}

// decodeJSONBody is a helper function for sane defaults when decoding json
// bodies.
// See: https://www.alexedwards.net/blog/how-to-properly-parse-a-json-request-body for more info.
func decodeJSONBody(w http.ResponseWriter, r *http.Request, dst interface{}) error {
	if !isJSONAPIMediaType(r) {
		return aderrors.ErrNotJSONAPIMediaType
	}

	r.Body = http.MaxBytesReader(w, r.Body, 1048576)

	dec := json.NewDecoder(r.Body)
	dec.DisallowUnknownFields()

	err := dec.Decode(&dst)
	if err != nil {
		var syntaxError *json.SyntaxError
		var unmarshalTypeError *json.UnmarshalTypeError

		switch {
		case errors.As(err, &syntaxError):
			msg := fmt.Sprintf("Request body contains badly-formed JSON (at position %d)", syntaxError.Offset)
			return aderrors.NewAPIError(http.StatusBadRequest, msg, err)

		case errors.Is(err, io.ErrUnexpectedEOF):
			msg := fmt.Sprintf("Request body contains badly-formed JSON")
			return aderrors.NewAPIError(http.StatusBadRequest, msg, err)

		case errors.As(err, &unmarshalTypeError):
			msg := fmt.Sprintf("Request body contains an invalid value for the %q field (at position %d)", unmarshalTypeError.Field, unmarshalTypeError.Offset)
			return aderrors.NewAPIError(http.StatusBadRequest, msg, err)

		case strings.HasPrefix(err.Error(), "json: unknown field "):
			fieldName := strings.TrimPrefix(err.Error(), "json: unknown field ")
			msg := fmt.Sprintf("Request body contains unknown field %s", fieldName)
			return aderrors.NewAPIError(http.StatusBadRequest, msg, err)

		case errors.Is(err, io.EOF):
			msg := "Request body must not be empty"
			return aderrors.NewAPIError(http.StatusBadRequest, msg, err)

		case err.Error() == "http: request body too large":
			msg := "Request body must not be larger than 1MB"
			return aderrors.NewAPIError(http.StatusBadRequest, msg, err)

		default:
			return aderrors.NewAPIError(http.StatusInternalServerError, "Internal Server Error", err)
		}
	}

	if dec.More() {
		msg := "Request body must only contain a single JSON object"
		return aderrors.NewError(http.StatusBadRequest, msg, nil)
	}

	return nil
}

func isJSONAPIMediaType(r *http.Request) bool {
	// If the Content-Type header is present, check that it has the value
	// application/vnd.api+json. Note that we are using the gddo/httputil/header
	// package to parse and extract the value here, so the check works
	// even if the client includes additional charset or boundary
	// information in the header.
	if r.Header.Get("Content-Type") != "" {
		value, _ := header.ParseValueAndParams(r.Header, "Content-Type")
		return value == jsonapi.MediaType
	}
	return false
}
