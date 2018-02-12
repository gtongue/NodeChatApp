import React, { Component } from 'react';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="chat-input">
        <form id="input-form" action="">
          <input id="input-field"
            type="text"
            placeholder="julien sucks"/>
          <input id="submit-button" type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default ChatInput;