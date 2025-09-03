import { useState, useEffect, use } from "react";
import GameCard from "./GameCard";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function GamesInList() {
    const [games, setGames] = useState([]);
    const { listId } = useParams();
    const navigate = useNavigate();

    const location = useLocation();
    const listName = location.state?.listName;

    const [draggedItemIndex, setDraggedItemIndex] = useState(null);
    const handleDragStart = (index) => {
        setDraggedItemIndex(index);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (droppedOnIndex) => {

        const sourceIndex = draggedItemIndex;

        const destinationIndex = droppedOnIndex;

        if (sourceIndex === destinationIndex) return;

        const draggedItem = games[draggedItemIndex];

        const remainingItems = games.filter((_, index) => index !== draggedItemIndex);

        const newGamesList = [
            ...remainingItems.slice(0, droppedOnIndex),
            draggedItem,
            ...remainingItems.slice(droppedOnIndex),
        ];

        setGames(newGamesList);
        setDraggedItemIndex(null);

        // salvar no backend

        fetch(`http://localhost:8080/lists/${listId}/replacement`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sourceIndex: sourceIndex,
                targetIndex: destinationIndex
            })
        })
        .then(response => {
            if (!response.ok) {
                console.error('Falha ao salvar a ordem no backend');
            }
        });
    };

    useEffect(() => {
        fetch(`http://localhost:8080/lists/${listId}/games`)
            .then(response => response.json())
            .then(data => {setGames(data)});
    }, [listId]);

    return (
        <>
        {listName && <h1 className="list-name">{listName}</h1>}
        {games.map((game, index) => (<GameCard key={game.id} game={game} index={index} onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop}/>))}
        </>
    )
}