import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click Me!!</button>;
}

const root = document.getElementById('root');

ReactDOM.render(<CustomButton />, root);
