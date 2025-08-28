import { useState, useEffect, use } from "react";
import { Link } from "react-router-dom";

export default function GameLists() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/lists')
            .then(response => response.json())
            .then(data => { setLists(data) });
    }, []);

    return (
        <>
            <div className="list-collection">
                <h2>Minhas coleções</h2>
                {lists.map(list => (<Link key={list.id} to={`/lists/${list.id}`} className="btn-category" state={{ listName: list.name }}>{list.name}</Link>))}
            </div>
        </>
    );
}