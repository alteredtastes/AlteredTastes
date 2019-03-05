import * as React from "react";
// import { connect } from "react-redux";
import {styled} from "../../style/styled-components";
import {Rest} from "../../rest/Rest";

async function logFetch(url:string) {
  try {
    // const httpFetch = new RestApplicationClient(new HttpFetch());
    const response = await fetch(url);
    console.log(await response.text());
  }
  catch (err) {
    console.log('fetch failed', err);
  }
}

export default class Router extends React.Component<{socket:WebSocket}> {

  onSendMessage = () => {
    if (this.props.socket)
      this.props.socket.send("Here's some text that the server is urgently awaiting!");
  };

  onSendRequest = async () => {

    logFetch("http://localhost:9090/rest");
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