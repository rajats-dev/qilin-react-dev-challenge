import React from "react";
import { useTheme } from "./theme-context";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";
import "./style.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <nav className="nav-bar">
        <div>Theme Switcher</div>
        <div className="toggle-slide">
          <label>
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </nav>
      {theme === "dark" ? <DarkTheme /> : <LightTheme />}
    </div>
  );
};

export default ThemeSwitcher;
