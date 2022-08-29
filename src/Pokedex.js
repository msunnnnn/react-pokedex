import Pokecard from "./Pokecard"


const POKEDEX = [
  {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
  {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
  {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
  {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
  {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
  {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
  {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
  {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
]

/** takes in all pokemons and calls Pokecard,
 * returns a list of Pokecards
 */
function Pokedex({pokemons = POKEDEX}){
  // let allPokemons = []
  // for (let pokemon of pokemons){
  //   allPokemons.push(<li>{Pokecard(pokemon)}</li>)
  // }
  // return allPokemons


  //don't call Pokecard use <Pokecard />
  return pokemons.map(pokemon => (<li>{Pokecard(pokemon)}</li>))
}

export default Pokedex