import "tachyons";
import "../css/styles.scss";
import m from "mithril";
import Stream from "mithril/stream";
import mergerino from "mergerino";
import meiosisMergerino from "meiosis-setup/mergerino";

import { AppComponent } from "./app";
import { Route, navTo, router } from "./router";

const merge = mergerino;
const root = document.body;

const app = {
  patch: navTo([Route.Home()]),
  initial: Object.assign({
    "todos": [],
  }),
  Actions: function(update) {
    return Object.assign({
      navigateTo: route => update(navTo(route)),
    });
  }
};

const { update, states, actions } = 
  meiosisMergerino({ stream: Stream, merge, app });

window.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(app);

  m.route(
    root, 
    "/c",
    router.MithrilRoutes({ states, actions, App: AppComponent })
  );

  states.map(() => m.redraw());
  states.map(state => router.locationBarSync(state.route));
}
