const offset = 0;
const limit = 10;
const url = `http://pokeapi.co/api/v2/pokemon?off=${offset}&limit=${limit}`

fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => console.log(jsonBody))
  .catch((error) => console.error(error))
