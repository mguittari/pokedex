function PokemonCard({pokemon}){

  

    return <div>
      {pokemon.map((p)=> (
        
        p.imgSrc ? (<figure> <img src={p.imgSrc}/> 
        <figcaption>{p.name}</figcaption></figure>) : <figcaption>{"???"}</figcaption>
        
      )) }
        
    </div>
  
}
 

export default PokemonCard;