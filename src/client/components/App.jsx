import React, { Component } from 'react';
import Main from './Main.jsx';
import Sidebar from './Sidebar.jsx';
// import io from "socket.io";

class App extends Component {
  constructor(props) {
    super(props);
    // window.socket = io.connect();
    this.state = {

    };
  }

  render() {
    return (
      <div id="app">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;