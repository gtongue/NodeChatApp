import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.messages;
    return (
      <div id="message-index">
        <ul>
          { 
            messages.map((message, index) =>
              (<li key={index}><Message body={message}/></li>))
          }
        </ul>
      </div>
    );
  }
}

export default MessageIndex;