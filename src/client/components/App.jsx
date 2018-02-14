import React, { Component } from 'react';
import Main from './Main.jsx';
import Sidebar from './Sidebar.jsx';
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = socketIOClient();
    this.state = {

    };
  }

  render() {
    return (
      <div id="app">
        <Sidebar />
        <Main socket = {this.socket}/>
      </div>
    );
  }
}

export default App;