import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

window.onresize(() => {
  document.body.style.setProperty("overflow", "auto");
  const metaViewport = document.querySelector("meta[name=viewport]");
  metaViewport.setAttribute(
    "content",
    "height=" + initialHeight + "px, width=device-width, initial-scale=1.0"
  );
});

// const metaViewport = document.querySelector("meta[name=viewport]");
// metaViewport.setAttribute(
//   "content",
//   "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'"
// );
