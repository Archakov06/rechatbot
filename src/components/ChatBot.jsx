import React from 'react';
import PropTypes from 'prop-types';

import ChatMessage from './ChatMessage';

import './index.css';

class ChatBot extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }

  handleNewMessage(obj) {
    const { onSendMessage } = this.props;
    this.sendBotMessage(obj.text);
    onSendMessage(obj);
  }

  sendBotMessage(handleValue) {
    const { options, delay, onSendMessage } = this.props;
    const botReply = options.filter(
      o => o.handle && o.handle.toLowerCase() === handleValue.toLowerCase()
    )[0];
    const notUnderstand = options.filter(o => o.handle === null)[0];
    this.setState({
      loading: true
    });
    setTimeout(() => {
      onSendMessage(botReply || notUnderstand);
      this.setState({
        loading: false
      });
    }, delay);
  }

  sendMessage(e) {
    if (e.key === 'Enter') {
      this.handleNewMessage({ text: e.target.value, isUser: true });
      e.target.value = '';
    }
  }

  sendAction(text) {
    this.handleNewMessage({ text, isUser: true });
  }

  componentDidMount() {
    const { welcomeMessage, options, onSendMessage } = this.props;
    if (welcomeMessage >= 0) {
      onSendMessage(options[welcomeMessage]);
    }
  }

  componentDidUpdate() {
    if (this.messages) {
      this.messages.scrollTop = this.messages.scrollHeight - this.messages.clientHeight;
    }
  }

  render() {
    const { messages, hideAvatar, hideUserMessage, avatars } = this.props;
    const { loading } = this.state;
    return (
      <div className="chat">
        <ul ref={ref => (this.messages = ref)} className="chat__messages">
          {messages &&
            messages.map((msg, msgKey) => {
              if (msg.isUser && hideUserMessage) {
                return null;
              }
              return (
                <ChatMessage
                  hideAvatar={hideAvatar}
                  avatars={avatars}
                  sendAction={this.sendAction.bind(this)}
                  key={msgKey}
                  {...msg}
                />
              );
            })}
          {loading && <ChatMessage placeholder hideAvatar={hideAvatar} avatars={avatars} />}
        </ul>
        <div className="chat__input">
          <input
            onKeyUp={this.sendMessage.bind(this)}
            type="text"
            placeholder="Enter your text message..."
          />
        </div>
      </div>
    );
  }
}

ChatBot.defaultProps = {
  hideUserMessage: false,
  hideAvatar: false,
  delay: 1000
};

ChatBot.propTypes = {
  hideUserMessage: PropTypes.bool,
  hideAvatar: PropTypes.bool,
  delay: PropTypes.number,
  welcomeMessage: PropTypes.number,
  options: PropTypes.array.isRequired,
  messages: PropTypes.array.isRequired,
  onSendMessage: PropTypes.func
};

export default ChatBot;
