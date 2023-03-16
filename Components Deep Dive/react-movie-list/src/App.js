import { useEffect, useState } from 'react';

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/movies.json`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.movies);
            });
    }, []);

    const onMoviedelete = (id) => {
        setMovies((state) => state.filter((x) => x.id !== id));
    };

    const onMovieSelect = (id) => {
        setMovies((state) =>
            state.map((x) => (x.id === id ? { ...x, selected: true } : x))
        );
    };

    return (
            <h1>Movie collection</h1>
           
    );
}

export default App;
