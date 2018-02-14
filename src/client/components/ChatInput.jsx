import React, { Component } from 'react';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      text: null
    };
    this.socket = props.socket;
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
    this.socket.emit("send_message", {message: this.state.text});
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

  onSubmit(e){
    e.preventDefault();
    console.log(e);
  }

}

export default ChatInput;