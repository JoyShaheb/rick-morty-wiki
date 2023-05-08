import { createTheme } from "@mui/material/styles";
import { ThemeTypes } from "./types";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const theme = (theme: ThemeTypes) => {
  return theme == "dark" ? darkTheme : lightTheme;
};
