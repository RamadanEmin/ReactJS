const baseUrl = 'http://localhost:3030/data';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/pets`);
    let pets = await response.json();
    let result = Object.values(pets);

    return result;
};

export const create = async (petData, token) => {
    let response = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ ...petData, likes: [] })
    });

    let result = await response.json();
    return result;
};

export const getOne = async (id) => {
    const res = await fetch(`${baseUrl}/pets/${id}`);
    const pet = await res.json();

    return pet;
};

export const update = (petId, petData) => {
    return fetch(`${baseUrl}/pets/${petId}`,{
        method:'PUT',
        body: JSON.stringify({ ...petData})
    })
    .then(res => res.json());
};

export const destroy = (petId, token) => {
    return fetch(`${baseUrl}/pets/${petId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    })
        .then(res => res.json());
};

