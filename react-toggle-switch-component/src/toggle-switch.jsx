import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    const status = (this.state.toggle ? 'on' : 'off');
    return (
      <div className='outer-switch' onClick={this.clickHandler}>
        <div className={'switch-container ' + status}>
          <div className={'switch ' + status}></div>
        </div>
        <p className='switch-text'>{status.toUpperCase()}</p>
      </div>
    );
  }
}
