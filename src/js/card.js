import m from "mithril";

const cardComponent = {
  view: (vnode) => {
    var {states, actions} = vnode.attrs;
    console.log(states);
    console.log(actions);
    return m(".ph4.pv4", 
      m("p.measure-wide", "Hello from a module"));
  }
};

export default cardComponent;
