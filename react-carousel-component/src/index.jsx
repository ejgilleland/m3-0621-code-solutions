import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel.jsx';

const exampleImgArray = [
  {
    index: 1,
    name: 'Bulbasaur',
    source: './images/001.png'
  },
  {
    index: 4,
    name: 'Charmander',
    source: './images/004.png'
  },
  {
    index: 7,
    name: 'Squirtle',
    source: './images/007.png'
  },
  {
    index: 25,
    name: 'Pikachu',
    source: './images/025.png'
  },
  {
    index: 39,
    name: 'Jigglypuff',
    source: './images/039.png'
  }
];

ReactDOM.render(<Carousel items={exampleImgArray} />, document.getElementById('root'));
