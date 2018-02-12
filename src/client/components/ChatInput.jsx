import React, { Component } from 'react';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addMessage(this.state.text);
  }

  render() {
    return (
      <div id="chat-input">
        <form id="input-form"
          onSubmit={this.handleSubmit}>
          <input id="input-field"
            type="text"
            placeholder="#vapenayshe"
            onChange={this.handleInput}/>
          <input id="submit-button" 
            type="submit" 
            value="Send"/>
        </form>
      </div>
    );
  }
}

export default ChatInput;