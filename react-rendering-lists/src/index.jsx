import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function Dexlister(props) {
  const pokedexElements = props.dex.map(i => <li key={i.number}>{i.name}</li>);
  return <ul>{pokedexElements}</ul>;
}
const root = document.getElementById('root');

ReactDOM.render(<Dexlister dex={pokedex} />, root);
