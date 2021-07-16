fetch('https://pokeapi.co/api/v2/pokemon/547')
  .then(response => response.json())
  .then(data => console.log(data));
