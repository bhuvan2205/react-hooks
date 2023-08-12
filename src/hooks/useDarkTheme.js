import { useContext } from "react";
import { ThemeContext } from "../context/theme";

const useDarkTheme = () => {
  return useContext(ThemeContext);
};

export default useDarkTheme;
