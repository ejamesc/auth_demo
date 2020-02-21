import "tachyons";
import "../css/styles.scss";
import m from "mithril";
import Stream from "mithril/stream";
import mergerino from "mergerino";
import cardComponent from "./card";

const merge = mergerino;
const root = document.body;
console.log(cardComponent);

var app = {
  initial: Object.assign({
    "todos": [],
  }),
  Actions: function(update) {
    return Object.assign({});
  }
};

var update = Stream();
var states = Stream.scan(merge, app.initial, update);
var actions = app.Actions(update);

window.addEventListener("DOMContentLoaded", 
  m.mount(root, {
    view: () => m(cardComponent, {states: states(), actions: actions})
  }));
