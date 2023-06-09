import { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Comment from './Comment/Comment';
import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService';
import { GameContext } from '../../contexts/GameContext';
import { useAuthContext } from '../../contexts/AuthContext';

const DetailsGame = () => {
    const { gameId } = useParams();
    const { addComment, fetchGameDetails, selectGame, removeGameHandler } = useContext(GameContext);
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const currentGame = selectGame(gameId);

    const isOwner = currentGame._ownerId === user._id;

    useEffect(() => {
        (async () => {
            const gameDetails = await gameService.getById(gameId);
            const gameComments = await commentService.getByGameId(gameId);

            fetchGameDetails(gameId, { ...gameDetails, comments: gameComments.map(c => `${c.user.email}:${c.text}`) });
        })();
    }, []);

    const addCommentHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const comment = formData.get('comment');

        commentService.create(gameId, comment)
            .then(() => {
                addComment(gameId, comment);
            });

        e.target.comment.value = '';
    };

    const gameDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this game?');

        if (confirmation) {
            gameService.remove(gameId)
                .then(() => {
                    removeGameHandler(gameId);
                    navigate('/catalog');
                });
        }
    };

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={currentGame.imageUrl} alt={currentGame.title} />
                    <h1>{currentGame.title}</h1>
                    <span className="levels">MaxLevel: {currentGame.maxLevel}</span>
                    <p className="type">{currentGame.category}</p>
                </div>

                <p className="text">{currentGame.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>

                    {currentGame.comments?.length > 0
                        ? <ul>
                            {currentGame.comments.map((c, i) => <Comment key={i} comment={c} />)}
                        </ul>
                        : <p className="no-comment">No comments.</p>
                    }

                </div>
                {isOwner &&
                    <div className="buttons">
                        <Link to={`/edit/${gameId}`} className="button">Edit</Link>
                        <button onClick={gameDeleteHandler} className="button">Delete</button>
                    </div>
                }
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <textarea name="comment" placeholder="Comment......" />
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
};

export default DetailsGame;