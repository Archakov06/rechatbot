import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Loading from './Loading';

const ChatMessage = props => {
  const {
    sendAction,
    loading,
    text,
    buttons,
    avatars,
    image,
    isUser,
    hideAvatar,
    animation,
  } = props;

  return (
    <li className={classnames('chat__message', `chat__message--${isUser ? 'user' : 'bot'}`)}>
      {!hideAvatar && (
        <div
          className="chat__avatar"
          style={{
            backgroundImage: avatars && `url(${isUser ? avatars.user : avatars.bot})`,
          }}
        />
      )}
      <div className={classnames('chat__content', `chat__content--${animation}`)}>
        {(loading || text) && (
          <div className={classnames('chat__text')}>
            {typeof text === 'function' ? text(props) : text}
            {loading && <Loading />}
          </div>
        )}
        {image && (
          <div
            className="chat__image"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        )}

        {buttons.length > 0 && (
          <div className="chat__buttons">
            {buttons.map((cmd, i) => (
              <button key={i} onClick={sendAction && sendAction.bind(this, cmd.callback)}>
                {cmd.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

ChatMessage.defaultProps = {
  loading: false,
  text: '',
  buttons: [],
  avatars: {},
  image: '',
  animation: 'none',
  isUser: false,
  hideAvatar: false,
  sendAction: null,
};

ChatMessage.propTypes = {
  sendAction: PropTypes.oneOfType([null, PropTypes.func]),
  loading: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  buttons: PropTypes.array,
  avatars: PropTypes.object,
  image: PropTypes.string,
  isUser: PropTypes.bool,
  hideAvatar: PropTypes.bool,
  animation: PropTypes.string,
};

export default ChatMessage;
