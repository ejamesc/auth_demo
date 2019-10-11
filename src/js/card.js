import m from "mithril";

const cardComponent = {
  view: (vnode) => {
    return m(".ph4.pv4", 
      m("p.measure-wide", "Hello from a module"));
  }
};

export default cardComponent;

