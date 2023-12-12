function PokemonCard({pokemon}){

  

    return <div>
      {pokemon.map((p)=> (
        
        p.imgSrc ? (<figure> <img src={p.imgSrc}/> 
        <figcaption>{p.name}</figcaption></figure>) : <figcaption>{"???"}</figcaption>
        
      )) }
        
    </div>
  
}


/*function PokemonCard(props) {
  
  const { pokemon } = props;
  const {name, imgSrc} = pokemon;
  console.log(props);
  
  return (
      <figure className="pokemon-card">
          <figcaption>{pokemon.name}</figcaption>
          {pokemon.imgSrc ? (
              <img src={pokemon.imgSrc} alt={pokemon.name} />
          ) : (
              <p>???</p>
          )}
      </figure>
  );
}
*/


      
    

/*<figure>
   <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt= "Bulbasaur"></img>
   <figcaption>Bulbasaur</figcaption>
</figure>*/
 

export default PokemonCard;