import { useState, useEffect, use } from "react";
import GameCard from "./GameCard";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function GamesInList() {
    const [games, setGames] = useState([]);
    const { listId } = useParams();
    const navigate = useNavigate();

    const location = useLocation();
    const listName = location.state?.listName;

    useEffect(() => {
        fetch(`http://localhost:8080/lists/${listId}/games`)
            .then(response => response.json())
            .then(data => {setGames(data)});
    }, [listId]);

    return (
        <>
        {listName && <h1 className="list-name">{listName}</h1>}
        {games.map(game => (<GameCard key={game.id} game={game}/>))}
        </>
    )
}