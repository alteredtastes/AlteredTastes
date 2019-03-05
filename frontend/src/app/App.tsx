import React from "react";
import { ThemeProvider } from "../style/styled-components";
import { theme } from "../style/theme";
import Router from "./router/Router";

export class App extends React.Component<{socket:WebSocket}> {
  render() {
    return (
      <ThemeProvider theme={theme}>
          <Router {...this.props} />
      </ThemeProvider>
    );
  }
}