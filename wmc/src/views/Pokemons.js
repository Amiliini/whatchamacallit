import React from "react";
import Pokemon from "./Pokemon";

const Pokemons = ({ pokemons }) => {
    return (
        <section>
            <div className="title">
                <h2>Pokemons</h2>
                <div className="underline"></div>
            </div>
            <div>
                {pokemons.map(pokemon => {
                    return <Pokemon key={pokemon.id} />;
                })}
            </div>
        </section>
    );
};

export default Pokemons;
