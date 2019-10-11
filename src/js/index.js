import "tachyons";
import "../css/styles.scss";
import m from "mithril";
import cardComponent from "./card";

const root = document.body;
console.log(cardComponent);
m.mount(root, cardComponent);
