import React, { Component } from 'react';
import ChatBot from '../../src';
import { mergeMessage } from '../../src/utils';

import '../../src/index.css';

import { switchField } from './utils';

import questions from './questions';
import config from './config';

class Demo extends Component {
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

  setField(msg) {
    const field = switchField(msg.lastId);
    this.setState(prevSate => ({
      formData: {
        ...prevSate.formData,
        [field]: msg.text,
      },
    }));
  }

  // validateForm(msg) {
  //   switch (msg.lastId) {
  //     case 'yourname':
  //       if (!/^[a-zA-Z]+$/.test(msg.text)) {
  //         return {
  //           text: 'Incorrect name!',
  //         };
  //       }
  //     case 'yourold':
  //       if (!/^\d+$/.test(msg.text)) {
  //         return {
  //           text: 'Incorrect old!',
  //         };
  //       }
  //     default:
  //       return msg;
  //   }
  // }

  handleMessage(msg) {
    // const invalidMsg = this.validateForm(msg);
    // if (!invalidMsg) {
    //   this.setState(mergeMessage(this.state, msg));
    //   this.setField(msg);
    // } else {
    //   this.setState(mergeMessage(this.state, invalidMsg));
    // }
    this.setState(mergeMessage(this.state, msg));
    this.setField(msg);
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="chat">
        <ChatBot
          welcomeId="welcome"
          messages={messages}
          options={questions}
          onSendMessage={this.handleMessage}
          avatars={config.avatars}
          delay={config.delay}
        />
      </div>
    );
  }
}

export default Demo;
