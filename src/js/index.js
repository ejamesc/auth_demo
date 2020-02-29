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
    const navigateTo = route => update(navTo(route));
        
    return {
      navigateTo,
    };
  }
};

const { update, states, actions } = 
  meiosisMergerino({ stream: Stream, merge, app });

window.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(router.MithrilRoutes({ states, actions, App: AppComponent }));

  m.route.prefix = "";
  m.route(
    root, 
    "/c",
    router.MithrilRoutes({ states, actions, App: AppComponent })
  );

  states.map(() => m.redraw());
  states.map(state => router.locationBarSync(state.route));
}
