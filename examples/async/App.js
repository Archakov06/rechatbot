import React, { Component } from 'react';
import ChatBot, { mergeMessage } from '../../src';

import '../../dist/index.css';

import { switchField } from './utils';

import questions from './questions';
import config from './config';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      wait: false,
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
    console.log(msg, 222);
    // if (msg.text === 'qwe') {
    //   this.setState({
    //     wait: true,
    //   });
    //   fetch('https://httpbin.org/delay/2')
    //     .then(res => res.json())
    //     .then(data => {
    //       this.setState({
    //         loading: false,
    //       });
    //       const newMsg = {
    //         text: () => (
    //           <div>
    //             Your IP: <b>{data.origin}</b>
    //           </div>
    //         ),
    //       };
    //       this.setState(mergeMessage(this.state, newMsg));
    //     });
    // }
  }

  render() {
    const { messages, wait } = this.state;
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
