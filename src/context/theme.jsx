import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export const useDarkTheme = () => {
  return useContext(ThemeContext);
};

export const useUpdateDarkTheme = () => {
  return useContext(ThemeUpdateContext);
};

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => setDarkTheme((prevState) => !prevState);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
