import React, { Component } from 'react';

import ChatBot from '../../src';
import '../../dist/index.css';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  addMessage(obj) {
    this.setState({
      messages: [...this.state.messages, obj],
    });
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="chat-wrapper">
        <ChatBot
          welcomeId="welcome"
          delay={800}
          messages={messages}
          onSendMessage={this.addMessage.bind(this)}
          avatars={{
            user: 'https://pp.userapi.com/c834104/v834104145/5ca01/AsZGGgLNr-4.jpg',
            bot: 'https://pp.userapi.com/c631216/v631216247/21c8b/qF8SubyAdsU.jpg',
          }}
          options={[
            {
              text: 'Welcome, to React ChatBot!',
              id: 'welcome',
              buttons: [
                {
                  label: 'Help',
                  callback: 'help',
                },
                {
                  label: 'Docs',
                  callback: 'docs',
                },
                {
                  label: 'Github',
                  callback: () => {
                    global.location.href = 'https://github.com/Archakov06/rechatbot';
                  },
                },
              ],
            },
            {
              id: 'docs',
              buttons: [
                {
                  label: 'Open documentation',
                  callback: () => {
                    global.location.href = 'https://github.com/Archakov06/rechatbot';
                  },
                },
              ],
            },
            {
              id: 'cats',
              buttons: [
                {
                  label: 'I need more cats!!!',
                  callback: () => {
                    global.location.href =
                      'https://www.google.ru/search?q=sweet+cats&newwindow=1&source=lnms&tbm=isch';
                  },
                },
              ],
              image: 'https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg',
            },
            {
              text: (
                <div>
                  <ul>
                    <li>
                      Get help information — "<b>help</b>".
                    </li>
                    <li>
                      Get docs link — "<b>docs</b>".
                    </li>
                    <li>
                      Welcome message — "<b>welcome</b>".
                    </li>
                    <li>
                      Get cat image — "<b>cats</b>".
                    </li>
                    <li />
                  </ul>
                  <img src="http://www.iconhot.com/icon/png/bunch-cool-bluish-icons/512/info-blog.png" />
                </div>
              ),
              id: 'help',
            },
            {
              text: 'Sorry, I can not understand what you mean.',
              id: null,
            },
          ]}
        />
      </div>
    );
  }
}

export default Demo;
