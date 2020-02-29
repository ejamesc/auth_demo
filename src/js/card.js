import m from "mithril";

export const Card = {
  view: (vnode) => {
    var {state, actions} = vnode.attrs;
    console.log(state);
    console.log(actions);
    return m(".pa4", 
      m("p.measure-wide", "This is a card component"));
  }
};
