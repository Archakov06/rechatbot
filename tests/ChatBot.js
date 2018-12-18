/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import ChatBot from '../src/ChatBot';

Enzyme.configure({ adapter: new Adapter() });

const noop = () => {};

describe('<ChatBot />', () => {
  it('should accept hideUserMessage', () => {
    const wrapper = mount(<ChatBot hideUserMessage={true} options={[]} messages={[]} />);
    expect(wrapper.props().hideUserMessage).to.be.equal(true);
  });

  it('should accept hideAvatar', () => {
    const wrapper = mount(<ChatBot hideAvatar={true} options={[]} messages={[]} />);
    expect(wrapper.props().hideAvatar).to.be.equal(true);
  });

  it('should accept delay', () => {
    const wrapper = mount(<ChatBot delay={500} options={[]} messages={[]} />);
    expect(wrapper.props().delay).to.be.equal(500);
  });

  it('should accept welcomeId', () => {
    const onSendMessageCallback = sinon.spy();
    const wrapper = mount(
      <ChatBot onSendMessage={onSendMessageCallback} welcomeId={null} options={[]} messages={[]} />,
    );
    expect(onSendMessageCallback.callCount).to.equal(0);
    expect(wrapper.props().welcomeId).to.be.equal(null);
  });

  it('should accept options', () => {
    const wrapper = mount(
      <ChatBot
        options={[
          {
            text: 'Welcome, to React ChatBot!',
            id: 'welcome',
            buttons: [
              {
                label: 'Help',
                value: 'help',
              },
            ],
          },
        ]}
        messages={[]}
      />,
    );
    expect(wrapper.props().options[0].id).to.be.equal('welcome');
  });

  it('should accept messages', () => {
    const wrapper = mount(
      <ChatBot
        messages={[
          {
            text: 'Welcome, to React ChatBot!',
            id: 'welcome',
            buttons: [
              {
                label: 'Help',
                value: 'help',
              },
            ],
          },
        ]}
        options={[]}
      />,
    );
    expect(wrapper.props().messages[0].id).to.be.equal('welcome');
  });

  it('should accept onSendMessage', () => {
    const onSendMessageCallback = sinon.spy();
    const wrapper = mount(
      <ChatBot
        welcomeId="welcome"
        options={[
          {
            id: 'welcome',
            text: 'Welcome, to React ChatBot!',
            buttons: [
              {
                label: 'Help',
                value: 'help',
              },
            ],
          },
        ]}
        messages={[]}
        onSendMessage={onSendMessageCallback}
      />,
    );
    expect(onSendMessageCallback.callCount).to.equal(0);
  });
});
