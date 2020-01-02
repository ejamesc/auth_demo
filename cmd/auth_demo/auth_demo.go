package main

import (
	"flag"
	"fmt"
	"net/http"
	"os"
	"path"
	"strings"

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

	fmt.Println(*templatesPath, *staticFilePath)
	env := app.NewEnv(logr, *templatesPath)
	router := app.NewRouter(*staticFilePath, env)
	portStr := ":8085"
	logr.Infof("Serving on localhost%s", portStr)
	http.ListenAndServe(portStr, router)
}
