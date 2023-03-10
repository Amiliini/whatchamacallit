import React, { useState, useEffect } from "react";

import Pokemons from "./Pokemons";
import Pagination from "./Pagination";
import Loading from "./Loading";
import axios from "axios";
import styles from "./ListPokemons.css";

function ListPokemons() {
    const [pokemon, setPokemon] = useState(["a", "B"]);
    const [currentPage, setCurrentPage] = useState(
        "https://pokeapi.co/api/v2/pokemon"
    );
    const [nextPage, setNextPage] = useState();
    const [previousPage, setPreviousPage] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let cancel;
        axios
            .get(currentPage, {
                cancelToken: new axios.CancelToken(c => (cancel = c)),
            })
            .then(res => {
                setLoading(false);
                setNextPage(res.data.next);
                setPreviousPage(res.data.previous);
                setPokemon(res.data.results.map(p => p.name));
            });
        return () => cancel();
    }, [currentPage]);

    function goToNextPage() {
        setCurrentPage(nextPage);
    }

    function goToPreviousPage() {
        setCurrentPage(previousPage);
    }

    if (loading)
        return (
            <>
                <Loading />
            </>
        );

    return (
        <>
            <div className="runko">
                <Pokemons pokemon={pokemon} />
                <Pagination
                    goToNextPage={nextPage ? goToNextPage : null}
                    goToPreviousPage={previousPage ? goToPreviousPage : null}
                />
            </div>
        </>
    );
}

export default ListPokemons;
