import React from 'react';

export default [
  {
    id: 'welcome',
    text: (
      <div>
        <p>
          😃 Hello, I'm <b>FormBot</b>!
        </p>
        <br />
        <p>I will help you fill out information about your profile.</p>
        <br />
        <p>📝 Please answer my questions</p>
      </div>
    ),
    handle: 'welcome',
    call: 'yourname',
  },
  {
    id: 'yourname',
    text: 'What is your name?',
    call: 'yourold',
    input: true,
    validator: value => /^[a-zA-Z]+$/.test(value),
  },
  {
    id: 'yourold',
    text: props => `Okay, ${props.last.text}! How old are you?`,
    call: 'thanku',
    input: true,
    validator: value => /^\d+$/.test(value),
  },
  {
    id: 'thanku',
    text: ({ formData }) => `Cool, ${formData.name}! Your old ${formData.old}.`,
  },
  {
    text: 'Sorry, I can not understand what you mean.',
    handle: null,
  },
];
