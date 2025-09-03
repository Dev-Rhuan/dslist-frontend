import styles from './GameCard.module.css'
import { Link } from 'react-router-dom'

export default function GameCard({game, index, onDragStart, onDragOver, onDrop}) {
    return (
        <>
            <Link to={`/games/${game.id}`}>
                <div className={styles.card} draggable="true" onDragStart={() => onDragStart(index)} onDragOver={(event) => onDragOver(event)} onDrop={() => onDrop(index)}>
                <img src={game.imgUrl} alt={game.title}/>
                <div className={styles.content}>
                    <h2>{game.title}</h2>
                    <p>{game.shortDescription}</p>
                    <p className={styles.year}>{game.year}</p>
                </div>
            </div>
            </Link>
        </>
    )
}