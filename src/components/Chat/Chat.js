import React, { Component } from 'react';
import Message from 'components/Message';
import './Chat.css';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: '',
  };

  changeInputMessage = e => {
    this.setState({ messageInput: e.target.value });
  };

  sendMessageOnEnter = e => {
    const { messages, messageInput } = this.state;

    if (e.key === 'Enter') {
      this.setState({
        messages: [...messages, { text: messageInput }],
        messageInput: '',
      });
    }
  };

  render() {
    const { messages, messageInput } = this.state;

    return (
      <div className="chat">
        <input
          type="text"
          className="input-message"
          value={messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
        {messages.map((item, idx) => {
          return <Message key={idx} text={item.text} />;
        })}
      </div>
    );
  }
}

export default Chat;
