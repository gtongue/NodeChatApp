import React, { Component } from 'react';
import Main from './Main.jsx';
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
        <Main />
      </div>
    );
  }
}

export default App;