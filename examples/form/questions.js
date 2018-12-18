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
    call: 'yourself',
  },
  {
    id: 'yourself',
    text: 'Tell me about yourself 😉',
    call: 'myname',
  },
  {
    id: 'myname',
    text: 'What is your name?',
    call: 'myold',
    input: true,
    delay: 2000,
    validator: value => /^[a-zA-Z]+$/.test(value),
  },
  {
    id: 'myold',
    text: ({ formData }) => `Okay, ${formData.name}! How old are you?`,
    call: 'cool',
    input: true,
    validator: value => /^\d+$/.test(value),
  },
  {
    id: 'cool',
    text: ({ formData }) => `Cool, ${formData.name}! Your old ${formData.old}. All right?`,
    buttons: [
      {
        label: 'Yes',
        callback: 'Yes',
      },
      {
        label: 'No',
        callback: 'No',
      },
    ],
  },
  {
    id: 'no',
    text: 'Wow! And what is wrong? Write a "myname" or "myold"?',
    input: true,
    buttons: [
      {
        label: 'Old',
        callback: 'myold',
      },
      {
        label: 'Name',
        callback: 'myname',
      },
    ],
  },
  {
    id: 'yes',
    text: ({ formData }) => (
      <div>
        Excellent!
        <br />
        <div>
          Name: <b>{formData.name}</b>
        </div>
        <div>
          Old: <b>{formData.old}</b>
        </div>
      </div>
    ),
    buttons: [
      {
        label: 'Repeat?',
        callback: 'repeat',
      },
      {
        label: 'Go to docs',
        callback: () => {
          global.location.href = 'https://github.com/Archakov06/';
        },
      },
    ],
  },
  {
    id: 'repeat',
    call: 'welcome',
  },
  {
    text: 'Sorry, I can not understand what you mean.',
    handle: null,
  },
];
