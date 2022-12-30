import React from "react";
import styles from "./ListPokemons.css";

export default function Pokemons({ pokemon }) {
    return (
        <div className="pokemon">
            {pokemon.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    );
}
