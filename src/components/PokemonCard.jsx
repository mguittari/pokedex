import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) =>
        p.imgSrc ? (
          <figure key={p.id}>
            <img src={p.imgSrc} />
            <figcaption>{p.name}</figcaption>
          </figure>
        ) : (
          <p key={p.id}>???</p>
        )
      )}
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PokemonCard;
