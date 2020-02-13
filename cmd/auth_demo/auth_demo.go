package main

import (
	"flag"
	"fmt"
	"net/http"
	"os"
	"path"
	"strings"
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
	logr.Infof("Template path: '%s', static path: '%s'", *templatesPath, *staticFilePath)
	logr.Infof("Serving on localhost%s", portStr)
	serv.ListenAndServe()
}
