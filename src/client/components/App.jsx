import React, { Component } from 'react';
import MainWindow from './MainWindow.jsx';
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
        <MainWindow socket = {this.socket}/>
      </div>
    );
  }
}

export default App;