import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  }

  render() {
    let temperature = '';
    if (this.state.clicks < 3) {
      temperature = 'cold';
    } else if (this.state.clicks < 6) {
      temperature = 'cool';
    } else if (this.state.clicks < 9) {
      temperature = 'warm';
    } else if (this.state.clicks < 12) {
      temperature = 'warmer';
    } else if (this.state.clicks < 15) {
      temperature = 'hot';
    } else {
      temperature = 'nuclear';
    }
    return <button onClick={this.clickHandler} className={temperature}>Hot Button!</button>;
  }
}
