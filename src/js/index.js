import "tachyons";
import "../css/styles.scss";
import m from "mithril";
import Stream from "mithril/stream";
import mergerino from "mergerino";
import meiosisMergerino from "meiosis-setup/mergerino";

import { AppComponent } from "./app";
import { Route, navTo, router } from "./router";
import { routeService, todoLoadService } from "./services";

const merge = mergerino;
const root = document.body;

const app = {
  patch: navTo([Route.Home()]),
  initial: Object.assign({
    "todos": [],
  }),
  Actions: function(update) {
    const navigateTo = route => update(navTo(route));
    const getTodo = () => {
      m.request({
        method: "GET",
        url: "/api/v1/todos",
        headers: {
          "Content-Type": "application/vnd.api+json"
        }
      })
        .then((result) => {
          console.log(result);
          update({todos: result});
        }).catch((e) => {
          console.log(JSON.stringify(e));
        });
    };
    const postTodo = () => {

    };
        
    return {
      navigateTo,
      getTodo,
    };
  },
  services: [routeService, todoLoadService]
};

const { update, states, actions } = 
  meiosisMergerino({ stream: Stream, merge, app });

window.addEventListener("DOMContentLoaded", main);

function main() {
  update({"csrf-token": document.getElementsByTagName("meta")["csrf.Token"].getAttribute("content")});
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
