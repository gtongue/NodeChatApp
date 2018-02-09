import React, { Component } from 'react';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            placeholder="julien sucks"/>
          <button disabled="disabled">Send</button>
        </form>
      </div>
    );
  }
}

export default ChatInput;