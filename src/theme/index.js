import PropTypes from "prop-types";
import { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import shape from "./shape";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import icons from "./icons";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";

ThemeConfig.propTypes = {
  children: PropTypes.node
};

export default function ThemeConfig({ children }) {
  const isLight = false;

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? { ...palette.light, mode: "light" } : { ...palette.dark, mode: "dark" },
      shape,
      icons: { ...icons },
      typography,
      breakpoints,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? { ...customShadows.light } : { ...customShadows.dark }
    }),
    [isLight]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
