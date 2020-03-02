import m from "mithril";
import { Routing } from "meiosis-routing/state";

import { Route, navTo, router, componentMap } from "./router";

// Top level app structure for JS
export const AppComponent = {
  view: ({ attrs: { state, actions } }) => 
    m(Root, { state, actions })
};

const Root = {
  view: ({attrs: {state, actions}}) => {
    const routing = Routing(state.route);
    const Component = componentMap[routing.localSegment.id];
    const isActive = tab => tab === Component; 
    console.log(state);

    return m("main.w-100", 
      [
        m(".fl.w-100.w-20-ns", [
          m(m.route.Link, {href: router.toPath([Route.Home()]), class: "pl3"}, "Home"),
          m(m.route.Link, {href: router.toPath([Route.Card()]), class: "pl3"}, "Card")
        ]),
        m(".fl.w-100.w-80-ns", m(Component, {state, actions, routing}))
      ]);
  }
};

