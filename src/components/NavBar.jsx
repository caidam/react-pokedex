import React from 'react';

function NavBar({ pokemonList, setPokemonIndex }) {
    const handleClick = (index) => {
        setPokemonIndex(index);
        if (pokemonList[index].name === "pikachu") {
            alert("pika pikachu!!!");
        }
    };

    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button key={pokemon.name} onClick={() => handleClick(index)}>
                    {pokemon.name}
                </button>
            ))}
        </div>
    );
}

export default NavBar;