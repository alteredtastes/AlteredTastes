import * as React from "react";
import {Dispatch, SetStateAction} from "react";
import {rest} from "../../protocol/rest/RestClient";
import styled from "styled-components";
import {GET_DOGS} from "../../protocol/graphql/queries";
import {useQuery} from "react-apollo-hooks";

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

const Router = ({socket}:IRouterProps) => {
  const [state, setState] = React.useState<IRouterState>({data:[]});
  const { data, error, loading } = useQuery(GET_DOGS);
  console.log("data", data)
  console.log("error", error)
  if (error) return <div>{error.message}</div>;

  return (
    <RouterWrap>
      <button onClick={() => onSendMessage(socket)}>Send Message</button>
      <button onClick={() => onSendRequest(state, setState)}>Send Request</button>
      <Logs>{state.data.map((str, i) => <div key={i}>{str}</div>)}</Logs>
      <div>
        {/*<ul>*/}
          {/*{data.dogs.map((dog:any) => (*/}
            {/*<li key={dog.id}>{dog.breed}</li>*/}
          {/*))}*/}
        {/*</ul>*/}
      </div>
    </RouterWrap>
  );
};

const RouterWrap = styled("div")``;
const Logs = styled('div')`
  display: flex;
  flex-direction: column;
`;

export default Router;
