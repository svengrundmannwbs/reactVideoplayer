import { useState, createContext, useContext } from "react";
import usePersistedState from "./usePersistedState";

const ThemeContext = createContext({});

/**
 * export custom provider
 * @param {boolean} darkMode
 * @returns
 */
export function ThemeProvider({ children }) {
  // const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = usePersistedState("darkmode", false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
