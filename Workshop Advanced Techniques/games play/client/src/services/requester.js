const baseUrl = 'http://localhost:3030';

const requester = async (method, url, data) => {
    const options = {
        method,
        headers: {},
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = localStorage.getItem('auth');
    const auth = JSON.parse(user || '{}');

    if (auth.accessToken) {
        options.headers['X-Authorization'] = auth.accessToken;
    }

    try {
        const response = await fetch(`${baseUrl}${url}`, options);

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.method);
    }
};

export const get = requester.bind(null,'GET');
export const post = requester.bind(null,'POST');
export const put = requester.bind(null,'PUT');
export const patch = requester.bind(null,'PATCH');
export const del = requester.bind(null,'DELETE');