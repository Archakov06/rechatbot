import React from 'react';
import { Loading } from '../../src';

class HttpBin extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }
  componentWillMount() {
    console.log(this.props, 999);
    fetch('https://httpbin.org/get')
      .then(res => res.json())
      .then(data => {
        this.setState({
          data,
        });
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        {data ? (
          <div>
            Your IP: <b>{data.origin}</b>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

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
    call: 'yourname',
  },
  {
    id: 'yourname',
    text: 'What is your name?',
    call: 'yourold',
    input: true,
    validator: value => /^[a-zA-Z]+$/.test(value),
    delay: 2000,
  },
  {
    id: 'yourold',
    text: ({ formData }) => `Okay, ${formData.name}! How old are you?`,
    call: 'thanku',
    input: true,
    validator: value => /^\d+$/.test(value),
  },
  {
    id: 'thanku',
    text: ({ formData }) => `Cool, ${formData.name}! Your old ${formData.old}. All right?`,
    validator: value => /^(yes|no)$/.test(value),
  },
  {
    id: 'no',
    text: 'Wow! And what is wrong? Write a "yourname" or "yourold"?',
    input: true,
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
    id: 'myip',
    text: <HttpBin />,
  },
  {
    text: 'Sorry, I can not understand what you mean.',
    handle: null,
  },
];
