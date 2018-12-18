# React-ChatBot

This is a ready-made simple chat bot component, to develop your own chat bots for the site.

<img src="https://hsto.org/webt/68/3j/zl/683jzl8dg5u1daqu8agqpf1ff44.gif" />

## Install

```bash
npm install rechatbot
```

or

```bash
yarn add rechatbot
```

## Usage

```js
import React, { Component } from 'react';

import ChatBot from 'rechatbot';

const options = [
  {
    id: 'welcome',
    text: 'Welcome, to React ChatBot!',
    buttons: [
      {
        label: 'Docs',
        call: 'docs',
      },
      {
        label: 'Github',
        call: () => {
          global.location.href = 'https://github.com/Archakov06/react-chatbot';
        },
      },
    ],
  },
  {
    id: 'docs',
    buttons: [
      {
        label: 'Open docs on GitHub',
        callback: () => {
          global.location.href = 'https://github.com/Archakov06/rechatbot';
        },
      },
    ],
  },
  {
    id: null,
    text: 'Sorry, I can not understand what you mean.',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(obj) {
    this.setState({
      messages: [...this.state.messages, obj],
    });
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="chat">
        <ChatBot
          welcomeId="welcome"
          delay={800}
          messages={messages}
          options={options}
          onSendMessage={this.addMessage}
          avatars={{
            user: 'https://pp.userapi.com/c834104/v834104145/5ca01/AsZGGgLNr-4.jpg',
            bot: 'https://pp.userapi.com/c631216/v631216247/21c8b/qF8SubyAdsU.jpg',
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## Documentation

### ChatBot

| Property           | Type                                                      | Description                                                          |
| ------------------ | --------------------------------------------------------- | -------------------------------------------------------------------- |
| `welcomeId`        | PropTypes.oneOfType([PropTypes.string, PropTypes.number]) | First message when you start a chat                                  |
| `messages`         | PropTypes.array.isRequired                                | List of messages (You must be maintained in a `this.state.messages`) |
| `options`          | PropTypes.array.isRequired                                | List of all available commands                                       |
| `avatars`          | PropTypes.object                                          | User and bot avatar                                                  |
| `delay`            | PropTypes.number                                          | Time delay message from the bot                                      |
| `hideUserMessage`  | PropTypes.bool                                            | Hide user messages                                                   |
| `hideAvatar`       | PropTypes.bool                                            | Hide avatars                                                         |
| `inputPlaceholder` | PropTypes.string                                          | Input placeholder text                                               |
| `onSendMessage`    | PropTypes.func.isRequired                                 | Callback function when a new message comes from a bot or user        |

### ChatMessage

| Property     | Type                                                                      | Description                    |
| ------------ | ------------------------------------------------------------------------- | ------------------------------ |
| `loading`    | PropTypes.bool                                                            | Message is loading             |
| `text`       | PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]) | Message text (text, component) |
| `buttons`    | PropTypes.array                                                           | Inline buttons                 |
| `sendAction` | PropTypes.func                                                            | Inline buttons callback        |
| `avatars`    | PropTypes.object                                                          | User and bot avatar            |
| `image`      | PropTypes.string                                                          | Attached image                 |
| `isUser`     | PropTypes.string                                                          | Message from the user          |
| `hideAvatar` | PropTypes.bool                                                            | Hide avatars                   |

## Author

- Name: Archakov Dennis
- Website: https://archakov.im
- E-Mail: hello@archakov.im

## License

MIT
