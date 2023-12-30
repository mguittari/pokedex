import "../App.css";

function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }) {
  const handleClickNext = () => {
    if (pokemonIndex <= pokemonList.length) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const handleClickPrevious = () => {
    if (pokemonIndex >= 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  return (
    <div>
      {pokemonIndex > 0 && (
        <button className="previous-button" onClick={handleClickPrevious}>
          Previous
        </button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button className="next-button" onClick={handleClickNext}>
          Next
        </button>
      )}
    </div>
  );
}

export default NavBar;
