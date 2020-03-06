import "tachyons";
import "../css/styles.scss";
import m from "mithril";
import Stream from "mithril/stream";
import { ulid } from "ulid";
import mergerino from "mergerino";
import meiosisMergerino from "meiosis-setup/mergerino";

import { AppComponent } from "./app";
import { Route, navTo, router } from "./router";
import { routeService, todoLoadService } from "./services";

const merge = mergerino;
const root = document.body;

function req(options) {
  options.headers = Object.assign({}, options.headers, {
    "Content-Type" : "application/vnd.api+json",
  });
  if (options.csrf) {
    options.headers["X-CSRF-Token"] = options.csrf;
  }
  return m.request(options);
}

const app = {
  patch: navTo([Route.Home()]),
  initial: Object.assign({
    "todos": [],
  }),
  Actions: function(update) {
    const navigateTo = route => update(navTo(route));
    const getTodo = () => {
      req({
        method: "GET",
        url: "/api/v1/todos",
      }).then((res) => {
        console.log(res);
        update({todos: res.data});
      }).catch((e) => {
        console.log(JSON.stringify(e));
      });
    };
    const postTodo = (state) => {
      req({
        method: "POST",
        url: "/api/v1/todos",
        csrf: state.csrfToken,
        body: {
          "data": {
            "type": "todo",
            "id": ulid(),
            "attributes": {
              "date_created": "2020-03-03T08:09:44.683187Z",
              "is_done": false,
              "name": "Some random todo"
            }
          }
        }
      }).then(res => {
        console.log(res);
        update({todos: (todos) => todos.concat(res.data)});
      }).catch(e => {
        console.log(JSON.stringify(e));
      });
    };
        
    return {
      navigateTo,
      getTodo,
      postTodo
    };
  },
  services: [routeService, todoLoadService]
};

const { update, states, actions } = 
  meiosisMergerino({ stream: Stream, merge, app });

window.addEventListener("DOMContentLoaded", main);

function main() {
  update({"csrfToken": document.getElementsByTagName("meta")["csrf.Token"].getAttribute("content")});
  m.route.prefix = "";
  m.route(
    root, 
    "/c",
    router.MithrilRoutes({ states, actions, App: AppComponent })
  );

  // Necessary for when programmatically navigating to something
  states.map(() => m.redraw());
  states.map(state => router.locationBarSync(state.route));
}
