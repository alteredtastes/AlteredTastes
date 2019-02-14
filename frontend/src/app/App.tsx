import React from "react";
import { ThemeProvider } from "../style/styled-components";
import { theme } from "../style/theme";
import Router from "./router/Router";

export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
          <Router />
      </ThemeProvider>
    );
  }
}