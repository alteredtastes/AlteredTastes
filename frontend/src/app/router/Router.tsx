import * as React from "react";
// import { connect } from "react-redux";
import {styled} from "../../style/styled-components";
import {rest} from "../../protocol/RestClient";

export default class Router extends React.Component<{socket:WebSocket}> {

  onSendMessage = () => {
    if (this.props.socket)
      this.props.socket.send("Here's some text that the server is urgently awaiting!");
  };

  onSendRequest = async () => {
    const meal = await rest.index();
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