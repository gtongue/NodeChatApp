import React, { Component } from 'react';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
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
<<<<<<< HEAD
      <div>
        <form action="" onSubmit = {this.onSubmit}>
          <input
            type="text"
            placeholder="julien sucks"/>
          <input type="submit"/>
=======
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
>>>>>>> 0c2ee79e19460b5f74b5c71f3fc70eddfd4ab735
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