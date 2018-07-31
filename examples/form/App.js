import React, { Component } from 'react';
import ChatBot, { mergeMessage } from '../../src';

import '../../dist/index.css';
import './App.css';

import questions from './questions';
import config from './config';

class FormDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      formData: {
        name: '',
        old: 0,
      },
    };
    this.setField = this.setField.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
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

  render() {
    const { messages } = this.state;
    return (
      <div className="chat-wrapper">
        <div className="chat-wrapper__bg" />
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

export default FormDemo;
