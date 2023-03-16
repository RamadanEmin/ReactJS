import Movie from './Movie';
import React from 'react';

export default function MovieList({ movies, onMoviedelete, onMovieSelect }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li style={{ listStyleType: 'none' }}>
          <Movie
            key={movie.id}
            {...movie}
            onMoviedelete={onMoviedelete}
            onMovieSelect={onMovieSelect}
          />
        </li>
      ))}
    </ul>
  );
}