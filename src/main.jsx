import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";  // ✅ use HashRouter
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);

