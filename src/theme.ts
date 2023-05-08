import { createTheme } from "@mui/material/styles";
import { ThemeTypes } from "./types/types";
import { MuiThemeEnums } from "./types/enums";

const darkTheme = createTheme({
  palette: {
    mode: MuiThemeEnums.DARK,
  },
});
const lightTheme = createTheme({
  palette: {
    mode: MuiThemeEnums.LIGHT,
  },
});

export const theme = (theme: ThemeTypes) => {
  return theme == MuiThemeEnums.DARK ? darkTheme : lightTheme;
};
