import * as request from './requester';

const URL = '/data/games';

export const getAll = () => request.get(URL);

export const create = (gameData) => request.post(URL, gameData);