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

const initialHeight = document.body.clientHeight;

const changeWindowSize = () => {
  document.body.style.setProperty("overflow", "auto");
  const metaViewport = document.querySelector("meta[name=viewport]");
  metaViewport.setAttribute(
    "content",
    "height=" + initialHeight + "px, width=device-width, initial-scale=1.0"
  );
};

window.onresize = changeWindowSize;
