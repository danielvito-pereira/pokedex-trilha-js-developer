const offset = 0;
const limit = 10;



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

pokeApi.getPokemons().then((pokemons) => {
  const ListItems =[]


  
    for(let i = 0; i < pokemons.length; i++){
      const pokemon = pokemons[i];
      ListItems.push(convertPokemonToLi(pokemon))
    }

  })


  