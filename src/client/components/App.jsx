import React, { Component } from 'react';
import MainWindow from './MainWindow.jsx';
import Sidebar from './Sidebar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="app">
        <Sidebar />
        <MainWindow />
      </div>
    );
  }
}

export default App;