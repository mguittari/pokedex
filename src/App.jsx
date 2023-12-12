import PokemonCard from "./components/PokemonCard"

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    
  },
  {
    name: "Mew",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
  },
];

function App(){
  
return <div>
      <h1>POKEDEX</h1>
      <PokemonCard pokemon={pokemonList}/>
    </div>
}
    
 
export default App;