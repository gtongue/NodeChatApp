import React, { Component } from 'react';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <form action="" onSubmit = {this.onSubmit}>
          <input
            type="text"
            placeholder="julien sucks"/>
          <input type="submit"/>
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