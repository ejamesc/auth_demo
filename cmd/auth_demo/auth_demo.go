package main

import (
	"context"
	"flag"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"path"
	"strings"
	"syscall"
	"time"

	"github.com/boltdb/bolt"
	"github.com/ejamesc/auth_demo/internal/app"
	"github.com/sirupsen/logrus"
)

func main() {
	flag.Usage = func() {
		fmt.Fprintln(os.Stderr, `usage: auth_demo [options]

Starts the web server

The options are:`)
		flag.PrintDefaults()
	}
	staticFilePath := flag.String("s", "", "static directory path - the full path of the static assets directory (required)")
	templatesPath := flag.String("t", "", "template directory path - the full path of the templates directory. All templates should be have the .html format. (required)")
	boltdbpath := flag.String("d", "", "boldb directory path")
	helpPtr := flag.Bool("h", false, "display help")

	flag.Parse()

	logr := logrus.New()
	if *helpPtr || flag.NFlag() == 0 {
		flag.Usage()
		os.Exit(0)
	}

	if strings.TrimSpace(*boltdbpath) == "" {
		logr.Fatal("app needs a boltdbpath")
	}

	boltDB, err := bolt.Open(path.Join(*boltdbpath, "auth_demo.db"), 0600, nil)
	if err != nil {
		logr.Fatalf("unable to open boldb: %s", err)
	}
	err = app.SetDB(boltDB)
	if err != nil {
		logr.Fatalf("unable to set boltdb: %s", err)
	}

	doneCh := make(chan bool, 1)
	quitCh := make(chan os.Signal, 1)

	signal.Notify(quitCh, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)

	env := app.NewEnv(logr, *templatesPath)
	rter := app.NewRouter(*staticFilePath, env)
	portStr := ":8085"
	serv := &http.Server{
		// It's important to set timeouts so you don't explode
		// More info here: https://blog.simon-frey.eu/go-as-in-golang-standard-net-http-config-will-break-your-production/
		// And: https://ieftimov.com/post/make-resilient-golang-net-http-servers-using-timeouts-deadlines-context-cancellation/
		ReadHeaderTimeout: 20 * time.Second,
		ReadTimeout:       1 * time.Minute,
		WriteTimeout:      2 * time.Minute,

		Handler: rter,
		Addr:    portStr,
	}

	// Graceful shutdown
	go func() {
		<-quitCh

		logr.Infof("Server is shutting down")

		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer func() {
			// Other cleanups should go here, e.g. cleaning up connections
			// to db, etc
			cancel()
		}()

		if err := serv.Shutdown(ctx); err != nil {
			logr.Fatalf("Server failed to shutdown gracefully, %v", err)
		}

		close(doneCh)
	}()

	logr.Infof("Template path: '%s', static path: '%s'", *templatesPath, *staticFilePath)
	logr.Infof("Serving on localhost%s", portStr)
	if err = serv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		logr.Fatalf("Failed to start server: %s", err)
	}

	<-doneCh
	logr.Infof("Server shutdown gracefully")
}
