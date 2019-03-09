import * as React from "react";
import {Dispatch, SetStateAction} from "react";
import {styled} from "../../style/styled-components";
import {rest} from "../../protocol/RestClient";

interface IRouterProps {socket:WebSocket}
interface IRouterState {data:string[]}

const onSendMessage = (socket:WebSocket) => {
  if (socket)
    socket.send("Here's some text that the server is urgently awaiting!");
};

const onSendRequest = async (state:IRouterState, setState:Dispatch<SetStateAction<IRouterState>>) => {
  const meal = await rest.meal(0);
  setState({data: state.data.concat(JSON.stringify(meal))});
};

export default function Router({socket}:IRouterProps) {
  const [state, setState] = React.useState<IRouterState>({data:[]});

  return (
    <RouterWrap>
      <button onClick={() => onSendMessage(socket)}>Send Message</button>
      <button onClick={() => onSendRequest(state, setState)}>Send Request</button>
      <Logs>{state.data.map((str, i) => <div key={i}>{str}</div>)}</Logs>
    </RouterWrap>
  );
}

const RouterWrap = styled("div")``;
const Logs = styled('div')`
  display: flex;
  flex-direction: column;
`;