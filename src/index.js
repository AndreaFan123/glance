import React from "react";
import { createRoot } from "react-dom/client";
window.React = React;

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App tab="home" />
  </React.StrictMode>
);
