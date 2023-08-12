import { useContext } from "react";
import { ThemeUpdateContext } from "../context/theme";

export const useUpdateDarkTheme = () => {
  return useContext(ThemeUpdateContext);
};
