import * as React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "react-jss";

import App from "./App";

const theme = {
  colors: {
    active: '#01cfc9',
    dark: '#000000',
    white: '#ffffff',
    primary: '#00122c',
    secondary: '#898880',
    secondaryLight: '#C5C3BC',
    accent: '#80722A',
  },
  spacing: (size: number): number => size * 6,
};

const rootElement = document.getElementById("root");
render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
, rootElement);
