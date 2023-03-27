import { createContext, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import * as gameService from '../services/gameService';

export const GameContext = createContext();

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_GAMES':
            return action.payload.map(x => ({ ...x, comments: [] }));
        case 'ADD_GAME':
            return [...state, action.payload];
        case 'EDIT_GAME':
            return state.map(x => x._id === action.gameId ? action.payload : x);
        default:
            return state;
    }
};

export const GameProvider = ({
    children
}) => {
    const [games, dispatch] = useReducer(gameReducer, []);
    const navigate = useNavigate();

    useEffect(() => {
        gameService.getAll()
            .then(result => dispatch({
                type: 'ADD_GAMES',
                payload: result
            }));
    }, []);

    const addGameHandler = (gameData) => {
        dispatch({
            type: 'ADD_GAME',
            payload: gameData
        });
        navigate(`/catalog/${gameData._id}`);
    };

    const editGameHandler = (gameId, gameData) => {
        dispatch({
            type: 'EDIT_GAME',
            payload: gameData,
            gameId
        });
    };

    return (
        <GameContext.Provider value={{
            games,
            addGameHandler,
            editGameHandler
        }}>
            {children}
        </GameContext.Provider>
    );
};