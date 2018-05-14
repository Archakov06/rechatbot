import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const ChatMessage = ({
  sendAction,
  placeholder,
  text,
  buttons,
  avatars,
  image,
  isUser,
  hideAvatar
}) => (
  <li
    className={classnames('chat__message', {
      'chat__message--user': isUser
    })}
  >
    {!hideAvatar && (
      <div
        className="chat__avatar"
        style={{
          backgroundImage: avatars && `url(${isUser ? avatars.user : avatars.bot})`
        }}
      />
    )}
    <div className="chat__content">
      {(placeholder || text) && (
        <div
          className={classnames('chat__text', {
            'chat__text--placeholder': placeholder
          })}
        >
          {text && <div>{text}</div>}
          {placeholder && (
            <p>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </p>
          )}
        </div>
      )}
      {image && (
        <div
          className="chat__image"
          style={{
            backgroundImage: `url(${image})`
          }}
        />
      )}
      <div className="chat__buttons">
        {buttons &&
          buttons.map((cmd, i) => (
            <button
              key={i}
              onClick={cmd.callback || (sendAction && sendAction.bind(this, cmd.value))}
            >
              {cmd.label}
            </button>
          ))}
      </div>
    </div>
  </li>
);

ChatMessage.defaultProps = {
  sendAction: () => {},
  placeholder: false,
  text: '',
  buttons: [],
  avatars: {},
  image: '',
  isUser: false,
  hideAvatar: false
};

ChatMessage.propTypes = {
  sendAction: PropTypes.func,
  placeholder: PropTypes.bool,
  text: PropTypes.string,
  buttons: PropTypes.array,
  avatars: PropTypes.object,
  image: PropTypes.string,
  isUser: PropTypes.bool,
  hideAvatar: PropTypes.bool
};

export default ChatMessage;
