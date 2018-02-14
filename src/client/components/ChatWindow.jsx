import React, { Component } from 'react';
import MessageIndex from './MessageIndex';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="chat-window">
        <MessageIndex messages={this.props.messages}/>
      </div>
    );
  }
}

export default ChatWindow;