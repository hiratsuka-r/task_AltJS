import React from "react";
import ReactDOM from "react-dom/client";

import AppModule from "./welcomeReact.scss";

//Hello React
const doms = document.querySelectorAll(".js-welcome");

const Welcome = (props) => {
  let welcomeClass = "l-welcome l-welcome-color";
  if (props.color) {
    welcomeClass = welcomeClass + "__" + props.color;
  }
  return <p className={welcomeClass}>Hello React</p>;
};

doms.forEach((dom) => {
  const root = ReactDOM.createRoot(dom);
  root.render(<Welcome color={dom.getAttribute("data-color")} />);
});
