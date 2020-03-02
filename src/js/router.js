import { createRouteSegments } from "meiosis-routing/state";
import { createMithrilRouter } from "meiosis-routing/router-helper";
import m from "mithril";

import { Card } from "./card";
import { Home } from "./home";

const routeConfig = {
  Home: "/c",
  Card: "/card",
  NotFound: "/:404..."
};

const NotFound = {
  view: () => m("p", "Not Found")
};

export const componentMap = {
  Home,
  Card,
  NotFound
};

export const Route = createRouteSegments([
  "Home",
  "Card",
  "NotFound"
]);

export const navTo = route => ({
  route: Array.isArray(route) ? route : [route]
});

export const router = createMithrilRouter({
  m,
  routeConfig,
  prefix: ""
});
