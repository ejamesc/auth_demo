import { routeTransition } from "meiosis-routing/state";
import { Route, navTo } from "./router";

export const routeService = ({ previousState, state }) => ({
  state: {
    routeTransition: () =>
      routeTransition(previousState.route, state.route)
  }
});

export const todoLoadService = ({ state }) => {
  if (state.routeTransition.arrive.Card) {
    return {
      next: ({ state, patch, update, actions }) => {
        actions.getTodo();
      }
    };
  }
};
