import { addClass, removeClass } from "./helpers";

let mouseoverHandler = function (event) {
  let span = event.target.parentNode.getElementsByTagName("SPAN")[0];
  addClass(span, "tooltip-show");
};

let mouseoutHandler = function (event) {
  let span = event.target.parentNode.getElementsByTagName("SPAN")[0];
  removeClass(span, "tooltip-show");
};

export default {
  install(Vue) {
    Vue.directive("tooltip", {
      bind(el, bindings) {
        let span = document.createElement("SPAN");
        let text = document.createTextNode(
          `Seats available: ${bindings.value.seats}`
        );
        span.appendChild(text);
        addClass(span, "tooltip");
        el.appendChild(span);
        let div = el.getElementsByTagName("DIV")[0];
        div.addEventListener("mouseover", mouseoverHandler);
        div.addEventListener("touchstart", mouseoverHandler);
        div.addEventListener("touchend", mouseoutHandler);
        div.addEventListener("mouseout", mouseoutHandler);
      },
      unbind(el) {
        let div = el.getElementsByTagName("DIV")[0];
        div.removeEventListener("mouseover", mouseoverHandler);
        div.removeEventListener("mouseout", mouseoutHandler);
        div.removeEventListener("touchstart", mouseoverHandler);
        div.removeEventListener("touchend", mouseoutHandler);
      },
    });
  },
};
