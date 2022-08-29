
/**Deconstructs pokemon object
 * returns a div of pokemon's name, image, type, and exp
 */
function Pokecard({ id, name, type, base_experience }) {
  return (
    <div>
      <h3> {name} </h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="pokemon" />
      <p> Type: {type} </p>
      <p> EXP: {base_experience} </p>

    </div>

  );
}
//Make img src url global var

export default Pokecard