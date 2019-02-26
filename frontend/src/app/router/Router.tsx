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
  socket:WebSocket|null = null;

  constructor(props:{}) {
    super(props);
  }

  componentWillMount(): void {
    this.socket = new WebSocket("ws://localhost:9000");
  }

  onSendMessage = () => {
    if (this.socket)
      this.socket.send("Here's some text that the server is urgently awaiting!");
  };

  onSendRequest = () => {
    logFetch("http://localhost:9000");
  };

  render() {
    return (
      <RouterWrap>
        <button onClick={this.onSendMessage}>Send Message</button>
        <button onClick={this.onSendRequest}>Send Request</button>
      </RouterWrap>
    );
  }
}

// export default connect(
//   () => ({}),
//   () => ({}))
// (Router);

const RouterWrap = styled("div")``;