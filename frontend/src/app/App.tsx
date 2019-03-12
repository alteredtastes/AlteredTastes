import React, {Suspense} from "react";
import {ThemeProvider} from "styled-components";
import {theme} from "../style/theme";
import {GraphQLProvider, GraphQLClient} from "../protocol/graphql/GraphQLClient";
import Router from "./router/Router";

interface IApp {socket:WebSocket}

const App = (props:IApp) => (
  <Suspense fallback={<div>fetching....</div>}>
    <GraphQLProvider client={GraphQLClient}>
      <ThemeProvider theme={theme}>
        <Router socket={props.socket} />
      </ThemeProvider>
    </GraphQLProvider>
  </Suspense>
);

export default App;