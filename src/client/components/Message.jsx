import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <p className="message-body">
        {props.body}
      </p>
    </div>
  );
};

export default Message;