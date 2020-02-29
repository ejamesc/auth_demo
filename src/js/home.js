import m from "mithril";

export const Home = {
  view: ({attrs: {state, actions}}) => {
    return m(".pa4", 
      m("p.measure-wide", "This is the home component"));
  }
};
