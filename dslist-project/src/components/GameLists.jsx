import { useState, useEffect, use } from "react";
import GamesInList from "./GamesInList";

export default function GameLists() {
    const [lists, setlists] = useState([]);
    const [selectedList, setSelectedList] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/lists')
            .then(response => response.json())
            .then(data => {setlists(data)});
    }, []);

    return (
        <>
        <h2>Minhas coleções</h2>
        {selectedList === null ? (lists.map(list => (<button key={list.id} onClick={() => setSelectedList(list.id)}>{list.name}</button>))
        ) : (<GamesInList listId={selectedList}/>)}
        </>
    )}