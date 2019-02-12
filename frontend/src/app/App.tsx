import React from "react";
import { ThemeProvider } from "../style/styled-components";
import { theme } from "../style/theme";
import { Provider } from "react-redux";
import Router from "./router/Router";
import { configureStore } from "./store";

const store = configureStore();

export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ThemeProvider>
    );
  }
}