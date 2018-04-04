import React from 'react';
import 'components/Message/Message.css';

const Message = ({ text }) => (
  <span className="message">{text}</span>
);

export default Message;
