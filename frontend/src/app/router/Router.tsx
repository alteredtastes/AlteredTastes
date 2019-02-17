import * as React from "react";
// import { connect } from "react-redux";
import { styled } from "../../style/styled-components";


async function logFetch(url:string) {
  try {
    const response = await fetch(url);
    console.log(await response.text());
  }
  catch (err) {
    console.log('fetch failed', err);
  }
}

export default class Router extends React.Component<{}> {

  constructor(props:{}) {
    super(props);
  }

  componentWillMount(): void {
    logFetch('')
  }

  onCallApi = () => {
    // logFetch('https://localhost:9000');
    var exampleSocket = new WebSocket("ws://localhost:9000");
    exampleSocket.send("Here's some text that the server is urgently awaiting!");
  };

  render() {
    return (
      <RouterWrap>
        <button onClick={this.onCallApi}>Call API</button>
      </RouterWrap>
    );
  }
}

// export default connect(
//   () => ({}),
//   () => ({}))
// (Router);

const RouterWrap = styled("div")``;