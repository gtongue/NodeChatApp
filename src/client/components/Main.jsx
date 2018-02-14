import React, { Component } from 'react';
import ChatInput from './ChatInput.jsx';
import ChatWindow from './ChatWindow.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        "Don't let your memes be dreams",
        "This is what Harambe would have wanted"
      ]
    };

    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(message) {
    if (!message || message.length === 0) return;
    const newMessages = this.state.messages.splice(0);
    newMessages.push(message);
    this.setState({
      messages: newMessages
    }, () => {
      const messageIndex = document.getElementById("message-index");
      messageIndex.scrollTop = messageIndex.scrollHeight;
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