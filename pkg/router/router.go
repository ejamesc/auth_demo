package router

import (
	"net/http"

	"github.com/pkg/errors"

	goji "goji.io"
)

// ErrPanic is an err type that means an application panic has occurred
var ErrPanic = errors.New("Application panic")
var ErrNotFound = errors.New("Route not found")

// HandlerError is a HandlerFunc that returns an error
type HandlerError func(w http.ResponseWriter, r *http.Request) error

// ErrorHandler is a function that handles errors
type ErrorHandler func(w http.ResponseWriter, req *http.Request, err error)

// Router is a router implemented on top of goji.
// It is modified to bind HandlerErrors — that is, handlers that return errors.
type Router struct {
	*goji.Mux
	// ErrHandler is a handler for dealing with errors returned by bound HandlerErrors
	// We expect the caller to attach their own ErrHandler, as this should be application specific
	ErrHandler ErrorHandler

	// PanicHandler is a handler for dealing with panics.
	// The passed error would be a wrapped ErrPanic with a stacktrace.
	PanicHandler ErrorHandler
}

// New returns a new router. It is a wrapper around goji's Mux function.
func New(errorHandler, panicHandler ErrorHandler) *Router {
	return &Router{
		Mux:          goji.NewMux(),
		ErrHandler:   errorHandler,
		PanicHandler: panicHandler,
	}
}

// NewSubMux is a wrapper around goji's SubMux.
func NewSubMux(errorHandler, panicHandler ErrorHandler) *Router {
	return &Router{
		Mux:          goji.SubMux(),
		ErrHandler:   errorHandler,
		PanicHandler: panicHandler,
	}
}

// HandleE handles HandlerErrors.
func (r *Router) HandleE(p goji.Pattern, h HandlerError) {
	r.Handle(p, r.wrapPanic(r.wrapError(h)))
}

func (r *Router) wrapError(h HandlerError) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		err := h(w, req)
		if err != nil && r.ErrHandler != nil {
			r.ErrHandler(w, req, err)
		}
	})
}

func (r *Router) wrapPanic(h http.Handler) http.Handler {
	fn := func(w http.ResponseWriter, req *http.Request) {
		defer func() {
			if err := recover(); err != nil {
				pe := errors.WithStack(ErrPanic)
				r.PanicHandler(w, req, pe)
			}
		}()
		h.ServeHTTP(w, req)
	}
	return http.HandlerFunc(fn)
}
