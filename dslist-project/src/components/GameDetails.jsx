import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './GameDetails.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

export default function GameDetails() {
    const [game, setGame] = useState(null);
    const { gameId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/games/${gameId}`)
            .then(response => response.json())
            .then(data => setGame(data));
    }, [gameId]);

    const renderStars = (score) => {
        const stars = [];
    
        for (let i = 0; i <= 5; i++) {
            if (i <= score) {
                stars.push(<FaStar key={i} />);
            } else if (i - 0.5 <= score) {
                stars.push(<FaStarHalfAlt key={i} />);
            } else {
                stars.push(<FaStar key={i}/>);
            }
        } return stars;
    };

    if (!game) {
        return <div>Carregando detalhes do jogo...</div>;
    }

    return (
        <>
            <div>
                <div className={styles.detailsContainer}>
                    <div className={styles.detailsHeader}>
                        <img className={styles.detailsImg} src={game.imgUrl} alt={game.title} />
                        <div className={styles.detailsInfo}>
                            <span className={styles.detailsYear}>{game.year}</span>
                            <h1>{game.title}</h1>
                            <p>
                                <span className={styles.detailsItem}>Genre:</span> {game.genre}
                                <br />
                                <span className={styles.detailsItem}>Platforms:</span> {game.platforms}
                            </p>
                            <div className={styles.detailsScore}> {renderStars(game.score)}</div>
                        </div>
                    </div>
                    <div className={styles.detailsDescription}>
                        <p>{game.longDescription}</p>
                    </div>
                </div>

            </div>
        </>
    );
}