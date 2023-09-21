import { useState, useEffect } from "react";
import { useThemeContext } from "../hooks/useThemeContext";

export default function ThemeSwitch() {
  const { darkMode, setDarkMode } = useThemeContext();

  const switchTheme = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    darkMode
      ? document.documentElement.setAttribute("data-bs-theme", "dark")
      : document.documentElement.removeAttribute("data-bs-theme", "");
  }, [darkMode]);

  return (
    <div id="theme-switch" className="me-5">
      <div className="switch-track">
        <div className="switch-check">
          <span className="switch-icon">🌙</span>
        </div>
        <div className="switch-x">
          <span className="switch-icon">🌞</span>
        </div>
        <div className="switch-thumb"></div>
      </div>

      <input
        type="checkbox"
        checked={darkMode}
        onChange={switchTheme}
        aria-label="Switch between dark and light mode"
      />
    </div>
  );
}
