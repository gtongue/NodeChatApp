import React, { Component } from 'react';
import ChatInput from './ChatInput.jsx';
import ChatWindow from './ChatWindow.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="main">
        <ChatWindow />
        <ChatInput />
      </div>
    );
  }
}

export default Main;