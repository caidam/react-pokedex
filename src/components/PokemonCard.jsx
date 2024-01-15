function PokemonCard (props) {

    const pokemon = props.pokemon

    console.log(props)

    return (
        <div>
            <figure>
                {pokemon.imgSrc ? (
                    <img
                        src={pokemon.imgSrc}
                        alt={pokemon.name}
                    />
                ) : (
                    <p>???</p>
                )}
                <figcaption>{pokemon.name}</figcaption>
            </figure>
        </div>
    );
}

export default PokemonCard;