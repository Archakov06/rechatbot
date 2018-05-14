/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import ChatMessage from '../src/components/ChatMessage.jsx';

Enzyme.configure({ adapter: new Adapter() });

const noop = () => {};

describe('<ChatMessage />', () => {
  it('should accept placeholder', () => {
    const wrapper = mount(<ChatMessage placeholder={true} />);
    expect(wrapper.props().placeholder).to.be.equal(true);
  });

  it('should accept text', () => {
    const wrapper = mount(<ChatMessage text={'Hello, World!'} />);
    expect(wrapper.props().text).to.be.equal('Hello, World!');
  });

  it('should accept buttons', () => {
    const wrapper = mount(<ChatMessage buttons={[{ label: 'Help', value: 'help' }]} />);
    expect(wrapper.props().buttons[0].label).to.be.equal('Help');
  });

  it('should accept avatars', () => {
    const wrapper = mount(
      <ChatMessage
        avatars={{
          user: 'image.jpg',
          bot: 'image.jpg'
        }}
      />
    );
    expect(wrapper.props().avatars.user).to.be.equal('image.jpg');
  });

  it('should accept image', () => {
    const wrapper = mount(<ChatMessage image="image.jpg" />);
    expect(wrapper.props().image).to.be.equal('image.jpg');
  });

  it('should accept isUser', () => {
    const wrapper = mount(<ChatMessage isUser={true} />);
    expect(wrapper.props().isUser).to.be.equal(true);
  });

  it('should accept hideAvatar', () => {
    const wrapper = mount(<ChatMessage hideAvatar={true} />);
    expect(wrapper.props().hideAvatar).to.be.equal(true);
  });
});
