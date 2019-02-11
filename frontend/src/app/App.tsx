import { Component } from "react";
import { styled, ThemeProvider } from "../style/styled-components";
import { theme } from "../style/theme";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import reducers from "./reducers";
import { MyComponent } from "./MyComponent";

// const combinedReducers = combineReducers<any/*AppState*/>(reducers);
// const store = createStore(combinedReducers, /*{someDefaultAppState}*/);

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {/*<Provider store={store}>*/}
          <Div textColor="green">
            A Styled Component
          </Div>
          <MyComponent />
        {/*</Provider>*/}
      </ThemeProvider>
    );
  }
}

const Div = styled('div')<{ textColor: string }>`
  color: ${p => p.textColor};
  background: ${p => p.theme.primaryColor};
  font-size: 30px;
`;