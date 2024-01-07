const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


function  convertPokemonToLi(pokemon){
  return`
    <li class="pokemon">
      <div class="info">
        <span class="name">${pokemon.name}</span>
        <span class="number">#001</span>
      </div>
      <div class="detail">
        <ol class="types">
          <li class="type">gras</li>
          <li class="type">poison</li>
        </ol>
        <img src="" alt="${pokemon.name}" srcset="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
      </div>
    </li>
  `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons =[]) => {//pega a lista e converte em um li
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('') //junta os elemento sem separador. o join junta tudo em uma string
  })


  