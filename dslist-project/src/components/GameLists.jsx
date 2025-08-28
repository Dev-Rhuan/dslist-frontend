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
        {selectedList === null ? (lists.map(list => (<button className="btn-category" key={list.id} onClick={() => setSelectedList(list.id)}>{list.name}</button>))
        ) : (
            <>
                <button className="btn-back" onClick={() => setSelectedList(null)}>&larr;</button>
                <GamesInList listId={selectedList}/>
            </>
        )}
        </>
    )}