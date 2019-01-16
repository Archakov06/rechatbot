import React, { Component } from 'react';
import classNames from 'classnames';

import ChatBot, { mergeMessage } from '../../src';

import '../../dist/index.css';
import './App.css';

import questions from './questions';
import config from './config';

class TrayWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      formData: {
        name: '',
        old: 0,
      },
      open: false,
    };
    this.setField = this.setField.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.openChat = this.openChat.bind(this);
  }

  switchField(id) {
    switch (id) {
      case 'myname':
      case 'myold':
        return id.replace('my', '');
      default:
        return null;
    }
  }

  setField(msg) {
    const field = this.switchField(msg.lastId);
    if (field) {
      this.setState(prevSate => ({
        formData: {
          ...prevSate.formData,
          [field]: msg.text,
        },
      }));
    }
  }

  handleMessage(msg) {
    this.setState(mergeMessage(this.state, msg));
    this.setField(msg);
  }

  openChat() {
    this.setState(({ open }) => ({
      open: !open,
    }));
  }

  render() {
    const { messages, open } = this.state;
    return (
      <div className={classNames('chat-tray', { 'chat-tray--opened': open })}>
        <div onClick={this.openChat} className="chat-tray__header">
          Write us, we are online!
        </div>
        <ChatBot
          welcomeId="welcome"
          messages={messages}
          options={questions}
          avatars={config.avatars}
          delay={config.delay}
          animation="slideup"
          onSendMessage={this.handleMessage}
        />
      </div>
    );
  }
}

export default TrayWidget;
