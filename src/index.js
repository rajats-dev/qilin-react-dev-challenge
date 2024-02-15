import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeContext from "./components/ThemeSwitcher/theme-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContext>
    <App />
  </ThemeContext>
);
