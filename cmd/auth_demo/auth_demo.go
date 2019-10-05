package main

import (
	"flag"
	"fmt"
	"net/http"
	"os"

	"github.com/ejamesc/auth_demo/internal/app"
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
	helpPtr := flag.Bool("h", false, "display help")

	flag.Parse()

	if *helpPtr || flag.NFlag() == 0 {
		flag.Usage()
		os.Exit(0)
	}

	fmt.Println(*templatesPath, *staticFilePath)
	env := app.NewEnv(*templatesPath)
	router := app.NewRouter(*staticFilePath, env)
	http.ListenAndServe(":8085", router)
}
