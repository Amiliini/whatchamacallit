import React from "react";

export default function Pokemons({ pokemon }) {
    return (
        <div>
            {Pokemons.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    );
}
