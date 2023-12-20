import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {
  const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      id: 1,
    },
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      id: 4,
    },
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      id: 7,
    },
    {
      name: "Rattata",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
      id: 19,
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      id: 25,
    },
    {
      name: "Psyduck",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
      id: 54,
    },
    {
      name: "Drowzee",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
      id: 96,
    },
    {
      name: "Lapras",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
      id: 131,
    },

    {
      name: "Mew",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
      id: 151,
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemon = pokemonList[pokemonIndex];

  const handleClickNext = () => {
    if (pokemonIndex <= pokemonList.length) {
      setPokemonIndex(pokemonIndex + 1);
    }
    console.log("click");
  };

  /* setPokemonIndex((precedentIndex) =>
    Math.min(precedentIndex + 1, pokemonList.length - 1)
  ); */

  const handleClickPrevious = () => {
    if (pokemonIndex >= 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  return (
    <div>
      <h1>POKEDEX</h1>
      <PokemonCard pokemon={pokemon} />
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

export default App;
