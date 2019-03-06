import * as React from "react";
// import { connect } from "react-redux";
import {styled} from "../../style/styled-components";
import {rest} from "../../protocol/RestClient";

interface IRouterProps {socket:WebSocket}
interface IRouterState {data:string[]}

export default class Router extends React.Component<IRouterProps, IRouterState> {
  constructor(props:{socket:WebSocket}) {
    super(props);
    this.state = {data: []};
  }

  onSendMessage = () => {
    if (this.props.socket)
      this.props.socket.send("Here's some text that the server is urgently awaiting!");
  };

  onSendRequest = async () => {
    const meal = await rest.meal(0);
    this.setState(() => {
      return {data: this.state.data.concat(JSON.stringify(meal))}
    });
  };

  render() {
    return (
      <RouterWrap>
        <button onClick={this.onSendMessage}>Send Message</button>
        <button onClick={this.onSendRequest}>Send Request</button>
        <Logs>{this.state.data.map(str => <div>{str}</div>)}</Logs>
      </RouterWrap>
    );
  }
}

// export default connect(
//   () => ({}),
//   () => ({}))
// (Router);

const RouterWrap = styled("div")``;
const Logs = styled('div')`
  display: flex;
  flex-direction: column;
`;