import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const getAll = () => request.get(`${baseUrl}/pets`);