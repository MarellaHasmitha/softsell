import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css"; // Ensure this file exists
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);