import { useState, useEffect } from 'react';

import LatestGameCard from './LatestGameCard';
import * as gameService from '../../services/gameService';

const WelcomeWorld = ({
    navigationChangeHandler
}) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getLatest()
            .then(result => setGames(result));
    }, []);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="/images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {games.length > 0
                    ? games.map(game => <LatestGameCard
                        key={game._id}
                        game={game}
                        navigationChangeHandler={navigationChangeHandler}
                    />)
                    : <p className="no-articles">No games yet</p>
                }

            </div>
        </section>
    );
};

export default WelcomeWorld;