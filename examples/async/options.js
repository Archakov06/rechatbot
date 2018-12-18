import React from 'react';
import { Loading } from '../../src';

class GetMyIP extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }
  componentWillMount() {
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
            <div>Last command: {this.props.last.text}</div>
            <div>
              Your IP: <b>{data.origin}</b>
            </div>
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
    text: <p>Hello! Send me "myip".</p>,
    input: true,
  },
  {
    id: 'myip',
    text: props => <GetMyIP {...props} />,
  },
  {
    text: 'Sorry, I can not understand what you mean.',
    id: null,
  },
];
