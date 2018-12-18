import React from 'react';
import PropTypes from 'prop-types';

import { serializeUserAnswer } from './utils';

import ChatMessage from './components/ChatMessage';
class ChatBot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      finished: false,
      userInput: false,
      inputCall: null,
      lastMsg: null,
      notUnderstand: props.options.filter(o => o.id === null)[0],
      callMessages: [],
    };
    this.callTimer = null;
  }

  /**
   * Находим ответ бота среди всех доступных ответов
   * Возвращаем сообщение для отправки пользователю
   * @param { object } msg
   */
  getMessage(msg) {
    const { options } = this.props;
    return options.filter(o => {
      if (o.id) {
        if (o.id instanceof RegExp) {
          return new RegExp(o.id).test(msg.text);
        } else {
          return o.id.toLowerCase() === msg.text.toLowerCase();
        }
      }
    })[0];
  }

  /**
   * Отлавливаем все сообщения от пользователя и бота
   * @param { obj } msg
   */
  handleNewMessage(msg) {
    if (msg.isUser) {
      this.renderMessage(msg);
      this.sendBotReply(msg);
    } else {
      this.renderDelayMessage(msg);
    }
    if (msg.finish) {
      this.setState({
        finished: true,
      });
    }
  }

  /**
   * Отправляем пользователю сообщение от бота
   * @param { object } msg
   */
  sendBotReply(msg) {
    const { notUnderstand, inputCall } = this.state;
    const botReply = inputCall
      ? this.getMessageById(inputCall)
      : this.getMessage(msg) || notUnderstand;

    if (!botReply) {
      throw new Error(
        'Missing message "not understand". Add to the list of options object { id: null, text: "..." }',
      );
    }

    if (botReply.text) {
      this.renderDelayMessage(botReply, msg);
    } else if (botReply.call) {
      const callMsg = this.getMessageById(botReply.call);
      this.handleNewMessage(callMsg);
    } else {
      this.renderDelayMessage(botReply, msg);
    }
  }

  /**
   * Отображаем пользователю конкретное сообщение
   * @param { object } msg
   */
  renderMessage(msg) {
    const { onSendMessage } = this.props;
    if (onSendMessage) {
      onSendMessage(msg);
    }
  }

  /**
   * Отображаем пользователю сообщение с ожиданием
   * @param { object } msg
   */
  renderDelayMessage(msg, lastMsg) {
    const { onSendMessage, delay } = this.props;
    this.setState({
      loading: true,
      userInput: !!msg.input,
      inputCall: msg.input ? msg.call : null,
      lastMsg: msg,
    });
    if (onSendMessage) {
      setTimeout(() => {
        onSendMessage(Object.assign({}, msg, { last: lastMsg }));
        this.setState({
          loading: false,
        });
        if (msg.call && !this.state.userInput) {
          const callMsg = this.getMessageById(msg.call);
          this.renderDelayMessage(callMsg);
        }
      }, msg.delay || delay);
    }
  }

  /**
   * Пользователь нажал Enter и отправить сообщение.
   * Превращает текст в объект сообщения.
   * @param { event } e
   */
  onInputReply(e) {
    const { inputCall, lastMsg } = this.state;
    if (e.key === 'Enter' && (lastMsg.validator ? lastMsg.validator(e.target.value) : true)) {
      this.handleNewMessage(
        serializeUserAnswer(e.target.value, {
          nextId: inputCall,
          lastId: lastMsg.id,
          input: true,
        }),
      );
      e.target.value = '';
    }
  }

  /**
   * Отправить действие из кнопок
   * @param { string } text
   */
  sendAction(callback) {
    if (typeof callback === 'function') {
      callback();
    } else {
      this.handleNewMessage(serializeUserAnswer(callback));
    }
  }

  /**
   * Получить сообщение по ID
   * @param { any } id
   */
  getMessageById(id) {
    const { options } = this.props;
    if (id) {
      return options.filter(obj => id === obj.id)[0];
    }
    return [];
  }

  getWelcomeMessage() {
    const { welcomeId } = this.props;
    const welcomeMessage = this.getMessageById(welcomeId);
    return welcomeMessage;
  }

  componentDidMount() {
    const welcomeMessage = this.getWelcomeMessage();
    this.handleNewMessage(welcomeMessage);
  }

  componentDidUpdate() {
    if (this.messages) {
      this.messages.scrollTop = this.messages.scrollHeight - this.messages.clientHeight;
    }
  }

  render() {
    const {
      messages,
      animation,
      hideAvatar,
      hideUserMessage,
      avatars,
      inputPlaceholder,
    } = this.props;
    const { loading, finished } = this.state;
    return (
      <div className="chat">
        <ul ref={ref => (this.messages = ref)} className="chat__messages">
          {messages.map((msg, index) => {
            if (msg.isUser && hideUserMessage) {
              return null;
            }
            return (
              <ChatMessage
                hideAvatar={hideAvatar}
                avatars={avatars}
                sendAction={this.sendAction.bind(this)}
                key={`${msg.id}_${index}`}
                animation={animation}
                {...msg}
              />
            );
          })}
          {loading && <ChatMessage loading hideAvatar={hideAvatar} avatars={avatars} />}
        </ul>
        <div className="chat__input">
          <input
            disabled={finished}
            onKeyUp={this.onInputReply.bind(this)}
            type="text"
            placeholder={inputPlaceholder}
          />
        </div>
      </div>
    );
  }
}

ChatBot.defaultProps = {
  hideUserMessage: false,
  hideAvatar: false,
  messages: [],
  options: [],
  welcomeId: null,
  delay: 1000,
  avatars: null,
  inputPlaceholder: 'Enter you answer...',
  animation: 'none',
};

ChatBot.propTypes = {
  hideUserMessage: PropTypes.bool,
  hideAvatar: PropTypes.bool,
  inputPlaceholder: PropTypes.string,
  delay: PropTypes.number,
  welcomeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.array.isRequired,
  messages: PropTypes.array.isRequired,
  avatars: PropTypes.object,
  onSendMessage: PropTypes.func.isRequired,
  animation: PropTypes.string,
};

export default ChatBot;
