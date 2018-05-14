# React-ChatBot

This is a ready-made simple chat bot component, to develop your own chat bots for the site.

<img src="https://habrastorage.org/webt/uy/9a/od/uy9aod3yyp2rqj2xw1vnceyndbi.gif" />

## Install (not working)

```bash
npm install react-chatbot || yarn add react-chatbot
```

## Usage

```js
import React, { Component } from 'react';

import ChatBot from 'react-chatbot';

const options = [
  {
    text: 'Welcome, to React ChatBot!',
    handle: 'welcome',
    buttons: [
      {
        label: 'Author',
        value: 'author'
      },
      {
        label: 'Github',
        callback: () => {
          global.location.href = 'https://github.com/Archakov06/react-chatbot';
        }
      }
    ]
  },
  {
    handle: 'author',
    buttons: [
      {
        label: 'Open author GitHub',
        callback: () => {
          global.location.href = 'https://github.com/Archakov06/';
        }
      }
    ]
  },
  {
    text: 'Sorry, I can not understand what you mean.',
    handle: null
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  addMessage(obj) {
    this.setState({
      messages: [...this.state.messages, obj]
    });
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="chat">
        <ChatBot
          welcomeMessage={0}
          delay={800}
          messages={messages}
          onSendMessage={this.addMessage.bind(this)}
          avatars={{
            user: 'https://pp.userapi.com/c834104/v834104145/5ca01/AsZGGgLNr-4.jpg',
            bot: 'https://pp.userapi.com/c631216/v631216247/21c8b/qF8SubyAdsU.jpg'
          }}
          options={options}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);
```

## Author

* Name: Archakov Dennis
* Website: https://archakov.im
* E-Mail: hello@archakov.im

## License

MIT · [Lucas Bassetti](http://lucasbassetti.com.br)
