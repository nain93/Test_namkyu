import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "../src/styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <div className="page-wrap">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
