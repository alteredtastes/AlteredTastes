import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import * as serviceWorker from './serviceWorker';

const socket = new WebSocket("ws://localhost:9090/socket");
socket.addEventListener('message', (event:MessageEvent) => {
  if (event.data === 'registered') {
    ReactDOM.render(<App socket={socket} />, document.getElementById('root'));
  }
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
