import React, { useState, useEffect } from "react";
import "./App.css";
import Loading from "./views/Loading";
import Pokemons from "./views/Pokemons";
//jatka täältä, object, results [{}]
const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

function App() {
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async () => {
        setLoading(true);

        try {
            const response = await fetch(url);
            const pokemons = await response.json();
            setLoading(false);
            setPokemons(pokemons);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        fetchPokemons();
    }, []);

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }

    return (
        <main>
            <Pokemons pokemons={pokemons} />
        </main>
    );
}

export default App;
