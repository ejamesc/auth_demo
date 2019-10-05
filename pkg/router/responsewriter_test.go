package router_test

import (
	"bufio"
	"fmt"
	"net"
	"net/http"
	"net/http/httptest"
	"path/filepath"
	"reflect"
	"runtime"
	"testing"
	"time"

	"github.com/ejamesc/auth_demo/pkg/router"
)

type closeNotifyingRecorder struct {
	*httptest.ResponseRecorder
	closed chan bool
}

func newCloseNotifyingRecorder() *closeNotifyingRecorder {
	return &closeNotifyingRecorder{
		httptest.NewRecorder(),
		make(chan bool, 1),
	}
}

func (c *closeNotifyingRecorder) close() {
	c.closed <- true
}

func (c *closeNotifyingRecorder) CloseNotify() <-chan bool {
	return c.closed
}

type hijackableResponse struct {
	Hijacked bool
}

func newHijackableResponse() *hijackableResponse {
	return &hijackableResponse{}
}

func (h *hijackableResponse) Header() http.Header           { return nil }
func (h *hijackableResponse) Write(buf []byte) (int, error) { return 0, nil }
func (h *hijackableResponse) WriteHeader(code int)          {}
func (h *hijackableResponse) Flush()                        {}
func (h *hijackableResponse) Hijack() (net.Conn, *bufio.ReadWriter, error) {
	h.Hijacked = true
	return nil, nil, nil
}

func TestResponseWriterWritingString(t *testing.T) {
	rec := httptest.NewRecorder()
	rw := router.NewResponseWriter(rec)

	rw.Write([]byte("Hello world"))

	equals(t, rec.Code, rw.Status())
	equals(t, rec.Body.String(), "Hello world")
	equals(t, rw.Status(), http.StatusOK)
	equals(t, rw.Size(), 11)
	equals(t, rw.Written(), true)
}

func TestResponseWriterWritingStrings(t *testing.T) {
	rec := httptest.NewRecorder()
	rw := router.NewResponseWriter(rec)

	rw.Write([]byte("Hello world"))
	rw.Write([]byte("foo bar bat baz"))

	equals(t, rec.Code, rw.Status())
	equals(t, rec.Body.String(), "Hello worldfoo bar bat baz")
	equals(t, rw.Status(), http.StatusOK)
	equals(t, rw.Size(), 26)
}

func TestResponseWriterWritingHeader(t *testing.T) {
	rec := httptest.NewRecorder()
	rw := router.NewResponseWriter(rec)

	rw.WriteHeader(http.StatusNotFound)

	equals(t, rec.Code, rw.Status())
	equals(t, rec.Body.String(), "")
	equals(t, rw.Status(), http.StatusNotFound)
	equals(t, rw.Size(), 0)
}

func TestResponseWriterBefore(t *testing.T) {
	rec := httptest.NewRecorder()
	rw := router.NewResponseWriter(rec)
	result := ""

	rw.Before(func(router.ResponseWriter) {
		result += "foo"
	})
	rw.Before(func(router.ResponseWriter) {
		result += "bar"
	})

	rw.WriteHeader(http.StatusNotFound)

	equals(t, rec.Code, rw.Status())
	equals(t, rec.Body.String(), "")
	equals(t, rw.Status(), http.StatusNotFound)
	equals(t, rw.Size(), 0)
	equals(t, result, "barfoo")
}

func TestResponseWriterHijack(t *testing.T) {
	hijackable := newHijackableResponse()
	rw := router.NewResponseWriter(hijackable)
	hijacker, ok := rw.(http.Hijacker)
	equals(t, ok, true)
	_, _, err := hijacker.Hijack()
	if err != nil {
		t.Error(err)
	}
	equals(t, hijackable.Hijacked, true)
}

func TestResponseWriteHijackNotOK(t *testing.T) {
	hijackable := new(http.ResponseWriter)
	rw := router.NewResponseWriter(*hijackable)
	hijacker, ok := rw.(http.Hijacker)
	equals(t, ok, true)
	_, _, err := hijacker.Hijack()

	assert(t, err != nil, "err is supposed to be returned")
}

func TestResponseWriterCloseNotify(t *testing.T) {
	rec := newCloseNotifyingRecorder()
	rw := router.NewResponseWriter(rec)
	closed := false
	notifier := rw.(http.CloseNotifier).CloseNotify()
	rec.close()
	select {
	case <-notifier:
		closed = true
	case <-time.After(time.Second):
	}
	equals(t, closed, true)
}

func TestResponseWriterFlusher(t *testing.T) {
	rec := httptest.NewRecorder()
	rw := router.NewResponseWriter(rec)

	_, ok := rw.(http.Flusher)
	equals(t, ok, true)
}

// assert fails the test if the condition is false.
func assert(tb testing.TB, condition bool, msg string, v ...interface{}) {
	if !condition {
		_, file, line, _ := runtime.Caller(1)
		fmt.Printf("\033[31m%s:%d: "+msg+"\033[39m\n\n", append([]interface{}{filepath.Base(file), line}, v...)...)
		tb.FailNow()
	}
}

// ok fails the test if an err is not nil.
func ok(tb testing.TB, err error) {
	if err != nil {
		_, file, line, _ := runtime.Caller(1)
		fmt.Printf("\033[31m%s:%d: unexpected error: %s\033[39m\n\n", filepath.Base(file), line, err.Error())
		tb.FailNow()
	}
}

// equals fails the test if exp is not equal to act.
func equals(tb testing.TB, exp, act interface{}) {
	if !reflect.DeepEqual(exp, act) {
		_, file, line, _ := runtime.Caller(1)
		fmt.Printf("\033[31m%s:%d:\n\n\texp: %#v\n\n\tgot: %#v\033[39m\n\n", filepath.Base(file), line, exp, act)
		tb.FailNow()
	}
}
