import React from "react";
import ReactDom from "react-dom/client";
import App from "./app";
import MobileApp from "./mobileView/mobileApp";
import "./mobileView/mobileStyle.css"
import "./style.css";
import "./bootstrap.css";


const isMobile = window.innerWidth <= 1000;
let root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>{isMobile ? <MobileApp /> : <App />}</React.StrictMode>
);
