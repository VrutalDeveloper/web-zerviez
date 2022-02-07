import { cyan, deepPurple } from "@mui/material/colors";
import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    primary: deepPurple,
    secondary: cyan,
    mode: "dark",
  },
};

export const originalTheme = createTheme(themeOptions);

export const theme = responsiveFontSizes(originalTheme);
