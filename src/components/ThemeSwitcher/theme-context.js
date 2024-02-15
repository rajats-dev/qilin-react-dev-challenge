import { useContext, createContext, useState, useEffect } from "react";

const Context = createContext();

export const useTheme = () => {
  return useContext(Context);
};

const ThemeContext = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const theme = isDark ? "dark" : "light";

  useEffect(() => {
    /// Setting Data-attribute to Html Element
    document.documentElement.setAttribute("select-theme", theme);
  }, [theme]);

  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};

export default ThemeContext;
