import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    console.log('state: ', this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='email'>Email: </label>
        <input onChange={this.handleChange} value={this.state.email} type='email' name='email' id='email'></input>
        <button>Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<NewsletterForm />, document.getElementById('root'));
