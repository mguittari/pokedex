
const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
  },
];


function PokemonCard(){
    return <div>
      {pokemonList.map((pokemon)=> (
        
        pokemon.imgSrc ? (<> <img src={pokemon.imgSrc}/> 
        <p>{pokemon.name}</p></>) : <p>{"???"}</p>
        
      )) }
  
    </div>
}
      
    

/*<figure>
   <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt= "Bulbasaur"></img>
   <figcaption>Bulbasaur</figcaption>
</figure>*/
 

export default PokemonCard;