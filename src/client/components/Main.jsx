import React, { Component } from 'react';
import ChatInput from './ChatInput.jsx';
import ChatWindow from './ChatWindow.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        "Hello world",
        "Don't let your dreams be memes.",
        "Hello thiccness my old friend"
      ]
    };

    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(message) {
    const newMessages = this.state.messages.splice(0);
    newMessages.push(message);
    this.setState({
      messages: newMessages
    });
  }

  render() {
    return (
      <div id="main">
        <ChatWindow messages={this.state.messages}/>
        <ChatInput addMessage={this.addMessage}/>
      </div>
    );
  }
}

export default Main;