import styles from './GameCard.module.css'

export default function GameCard({game}) {
    console.log(game);


    return (
        <>
            <div className={styles.card}>
                <img src={game.imgUrl} alt={game.title}/>
                <div className={styles.content}>
                    <h2>{game.title}</h2>
                    <p>{game.shortDescription}</p>
                    <p>{game.year}</p>
                </div>
            </div>
        </>
    )
}