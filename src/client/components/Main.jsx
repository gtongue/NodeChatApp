import React, { Component } from 'react';
import ChatInput from './ChatInput.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="main">
        Main
        <ChatInput />
      </div>
    );
  }
}

export default Main;