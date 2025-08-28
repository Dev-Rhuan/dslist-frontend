import { useState, useEffect, use } from "react";
import GameCard from "./GameCard";

export default function GamesInList({listId}) {
    const [games, setGames] = useState([listId]);

    useEffect(() => {
        fetch('http://localhost:8080/lists/' + listId + '/games')
            .then(response => response.json())
            .then(data => {setGames(data)});
    }, []);

    return (
        <>
        {games.map(game => (<GameCard key={game.id} game={(game)}></GameCard>))}
        </>
    )
}