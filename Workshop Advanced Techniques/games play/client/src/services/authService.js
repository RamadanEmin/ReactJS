import * as request from './requester';

export const register = (email, password) => request.post('/users/register', { email, password });