import React from 'react';

function ValidIcon(props) {
  return (
    <div className="icon valid">
      <i className="fas fa-check"></i>
    </div>
  );
}

function InvalidIcon(props) {
  return (
    <div className="icon invalid">
      <i className="fas fa-times"></i>
    </div>
  );
}

function InvalidMessage(props) {
  return (
    <div className="invalid message">
      {props.message}
    </div>
  );
}

export default class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      message: '',
      icon: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event) {
    if (!event.target.value.length) {
      this.setState({ password: event.target.value, message: 'A password is required.', icon: true });
    } else if (event.target.value.length < 8) {
      this.setState({ password: event.target.value, message: 'Your password is too short.', icon: true });
    } else if (event.target.value.length >= 8) {
      this.setState({ password: event.target.value, message: '', icon: true });
    }
  }

  handleBlur(event) {
    if (this.state.password === '') {
      this.setState({ message: 'A password is required', icon: true });
    }
  }

  render() {
    let icon = <div className='icon'></div>;
    if (this.state.icon) {
      icon = (this.state.password.length < 8) ? <InvalidIcon /> : <ValidIcon />;
    }
    return (
      <form>
        <label htmlFor="password-field">Password</label>
        <div>
          <input onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.password} type="password" name="password" id="password-field" />
          {icon}
          <InvalidMessage message={this.state.message} />
        </div>
      </form>
    );
  }
}
