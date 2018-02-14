import React, { Component } from 'react';
import UserIndex from './UserIndex.jsx';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="sidebar">
        <p id="banner">NodeChatApp</p>
        <UserIndex />
      </div>
    );
  }
}

export default Sidebar;