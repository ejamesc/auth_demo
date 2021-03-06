package app

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"strings"

	"github.com/asaskevich/govalidator"
	"github.com/ejamesc/auth_demo/internal/aderrors"
	"github.com/ejamesc/auth_demo/internal/models"
	"github.com/ejamesc/auth_demo/pkg/router"
	"github.com/sirupsen/logrus"
)

func serveLogin(env *Env) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		if u := env.getUser(r); u != nil {
			http.Redirect(w, r, "/c", http.StatusFound)
			return nil
		}

		fs := env.getFlash(w, r)
		lp := &localPresenter{
			PageTitle:       "Login",
			PageURL:         "/login",
			Flashes:         fs,
			globalPresenter: env.gp,
		}
		env.loe(env.rndr.HTML(w, http.StatusOK, "login", lp))
		return nil
	}
}

func servePostLogin(env *Env, sdb models.SessionService) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		email, pass := r.FormValue("email"), r.FormValue("password")
		if !govalidator.IsEmail(email) {
			env.saveFlash(w, r, "That's not a valid email.")
			http.Redirect(w, r, "/login", http.StatusFound)
			return aderrors.NewError(
				http.StatusBadRequest, "invalid email provided", nil).WithFields(
				logrus.Fields{"email": email})
		}

		if strings.TrimSpace(pass) == "" {
			env.saveFlash(w, r, "You need to provide a password.")
			http.Redirect(w, r, "/login", http.StatusFound)
			return aderrors.NewError(http.StatusBadRequest, "no password provided", nil)
		}

		u, err := sdb.GetUserByEmail(email)
		if err != nil {
			if errors.Is(err, aderrors.ErrNoRecords) {
				env.saveFlash(w, r, "Your email or password were incorrect.")
				// check pass to prevent timing attack, so extra
				u = &models.User{}
				u.CheckPassword(pass)
				http.Redirect(w, r, "/login", http.StatusFound)
				return aderrors.NewError(http.StatusBadRequest, "no user found", nil).WithFields(
					logrus.Fields{"email": email})
			} else {
				return aderrors.New500Error("error with retrieving user in login", err)
			}
		}

		passOK := u.CheckPassword(pass)
		if !passOK {
			env.saveFlash(w, r, "Your email or password were incorrect")
			http.Redirect(w, r, "/login", http.StatusFound)
			return aderrors.NewError(http.StatusBadRequest, "no user found", nil).WithFields(
				logrus.Fields{"email": email})
		}

		sess, err := sdb.CreateSession(u.ID, false)
		if err != nil {
			return aderrors.New500Error("error creating session for user", err).WithFields(logrus.Fields{"session": printStruct(sess)})
		}
		cookieStore, _ := env.store.Get(r, sessionNameConst)
		cookieStore.Values[sessionKeyConst] = sess.ID
		cookieStore.Save(r, w)
		http.Redirect(w, r, "/c", http.StatusFound)
		return nil
	}
}

func serveSignup(env *Env) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		if u := env.getUser(r); u != nil {
			http.Redirect(w, r, "/c", http.StatusFound)
			return nil
		}
		fs := env.getFlash(w, r)
		lp := &localPresenter{
			PageTitle:       "Sign Up",
			PageURL:         "/signup",
			Flashes:         fs,
			globalPresenter: env.gp,
		}
		env.loe(env.rndr.HTML(w, http.StatusOK, "signup", lp))
		return nil
	}
}

func servePostSignup(env *Env, sdb models.SessionService) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		email := strings.TrimSpace(r.FormValue("email"))
		pass := r.FormValue("password")
		username := strings.TrimSpace(r.FormValue("username"))

		if !govalidator.IsEmail(email) {
			env.saveFlash(w, r, "That's not a valid email.")
			http.Redirect(w, r, "/signup", http.StatusFound)
			return aderrors.NewError(http.StatusBadRequest, "invalid email provided", nil)
		}

		if strings.TrimSpace(pass) == "" {
			env.saveFlash(w, r, "You need to provide a password!")
			http.Redirect(w, r, "/signup", http.StatusFound)
			return aderrors.NewError(http.StatusBadRequest, "no password provided", nil)
		}

		username = strings.ToLower(strings.Replace(username, " ", "_", -1))
		if username == "" {
			env.saveFlash(w, r, "You need to provide a username!")
			http.Redirect(w, r, "/signup", http.StatusFound)
			return aderrors.NewError(http.StatusBadRequest, "no username provided", nil)
		}

		if len(username) < 2 {
			env.saveFlash(w, r, "A username needs to be at least 2 characters long.")
			http.Redirect(w, r, "/signup", http.StatusFound)
			return aderrors.NewError(http.StatusBadRequest, "username too short", nil)
		}

		u, err := sdb.GetUserByEmail(email)
		if err != nil && err != aderrors.ErrNoRecords {
			return aderrors.New500Error("error getting user from db", err)
		}
		if u != nil {
			env.saveFlash(w, r, "That email is already taken!")
			http.Redirect(w, r, "/signup", http.StatusFound)
			return aderrors.NewError(http.StatusBadRequest, "email already taken", nil).WithFields(logrus.Fields{"email": email})
		}

		u, err = sdb.GetUserByUsername(username)
		if err != nil && err != aderrors.ErrNoRecords {
			env.log.WithField("error", err).Println("there is an error")
			return aderrors.New500Error(fmt.Sprintf("error getting user by username %s from db", username), err)
		}
		if u != nil {
			env.log.WithField("user", u).Println("there is a user with that username")
			env.saveFlash(w, r, "That username is already taken!")
			http.Redirect(w, r, "/signup", http.StatusFound)
			return aderrors.NewError(http.StatusBadRequest, "username already taken", nil).WithFields(logrus.Fields{"username": username})
		}

		username = strings.ToLower(strings.Replace(username, " ", "_", -1))

		u = &models.User{
			Email:    email,
			Username: username,
			D: &models.UserMetadata{
				IsAdmin:     false,
				IsFirstTime: true,
			},
		}
		u.GenerateID()
		u.SetPassword(pass)

		ok, err := sdb.CreateUser(u)
		if !ok || err != nil {
			return aderrors.New500Error("error creating user during signup", err).WithFields(logrus.Fields{"user": printStruct(u)})
		}

		sess, err := sdb.CreateSession(u.ID, false)
		if err != nil {
			return aderrors.New500Error("error creating session for user", err).WithFields(logrus.Fields{"session": printStruct(sess)})
		}
		cookieStore, _ := env.store.Get(r, sessionNameConst)
		cookieStore.Values[sessionKeyConst] = sess.ID
		cookieStore.Save(r, w)
		http.Redirect(w, r, "/c", http.StatusFound)
		return nil
	}
}

type apiLoginStruct struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func serveAPIPostLogin(env *Env, sdb models.SessionService) router.HandlerError {
	return func(w http.ResponseWriter, r *http.Request) error {
		var alogin apiLoginStruct
		err := json.NewDecoder(r.Body).Decode(&alogin)
		if err != nil {
			apiErr := aderrors.New500APIError(fmt.Errorf("JSON decoder error: %w", err))
			return apiErr
		}

		if !govalidator.IsEmail(alogin.Email) {
			apiErr := aderrors.NewAPIError(
				http.StatusBadRequest, "invalid email provided", fmt.Errorf("Invalid email")).WithFields(
				logrus.Fields{"email": alogin.Email})
			return apiErr
		}

		if strings.TrimSpace(alogin.Password) == "" {
			apiErr := aderrors.NewAPIError(http.StatusBadRequest, "no password provided", fmt.Errorf("No password provided"))
			return apiErr
		}

		u, err := sdb.GetUserByEmail(alogin.Email)
		if err != nil {
			if errors.Is(err, aderrors.ErrNoRecords) {
				// check pass to prevent timing attack, so extra
				u = &models.User{}
				u.CheckPassword(alogin.Password)
				apiErr := aderrors.NewAPIError(http.StatusBadRequest, "no user found", fmt.Errorf("No user found")).WithFields(
					logrus.Fields{"email": alogin.Email})
				return apiErr
			} else {
				apiErr := aderrors.New500APIError(fmt.Errorf("error retrieving user: %w", err))
				return apiErr
			}
		}

		passOK := u.CheckPassword(alogin.Password)
		if !passOK {
			apiErr := aderrors.NewAPIError(http.StatusBadRequest, "your email or password was incorrect", fmt.Errorf("Password check failed")).WithFields(
				logrus.Fields{"email": alogin.Email})
			return apiErr
		}

		sess, err := sdb.CreateSession(u.ID, true)
		if err != nil {
			apiErr := aderrors.New500APIError(fmt.Errorf("error creating session for user: %w", err)).WithFields(logrus.Fields{"session": printStruct(sess)})
			return apiErr
		}
		env.loe(env.jsonAPI(w, http.StatusCreated, &tokenStruct{ID: sess.Token}))
		return nil
	}
}

type tokenStruct struct {
	ID string `jsonapi:"primary,token"`
}
