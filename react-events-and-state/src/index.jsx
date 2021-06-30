import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      (!this.state.isClicked)
        ? <button onClick={this.handleClick}>Click me!!</button>
        : <button onClick={this.handleClick}>Thanks!!!</button>
    );
  }

  handleClick() {
    this.setState({ isClicked: true });
  }
}

ReactDOM.render(<CustomButton />, document.getElementById('root'));
