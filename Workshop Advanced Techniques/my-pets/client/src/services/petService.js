import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const getAll = () => request.get(`${baseUrl}/pets`);

export const create = async (petData, token) => {
    let response = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...petData, likes: []})
    });

    let result = await response.json();

    return result;
};

export const update = (petId, petData) => request.put(`${baseUrl}/pets/${petId}`, petData);

export const getOne = (petId, signal) => {
    return fetch(`${baseUrl}/pets/${petId}`, { signal })
        .then(res => res.json())
};