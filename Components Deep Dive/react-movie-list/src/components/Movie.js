import { useEffect } from 'react';
import styles from './Movie.module.css';

export default function Movie({
  id,
  title,
  year,
  posterUrl,
  plot,
  director,
  onMoviedelete,
  onMovieSelect,
  selected,
}) {
  useEffect(() => {
    console.log(`Movie ${title} - mounted!`);

    return () => {
      console.log(`Movie ${title} - unmounted!`);
    };
  }, [title]);

  useEffect(() => {
    console.log(`Movie ${title} - updated!`);
  }, [selected, title]);

  return (
    <article className={styles['movie-article']}>
      <h3>
        {title}, {year}
      </h3>
      {selected && <h4>Selected</h4>}
      <main>
        <img src={posterUrl} alt={title} />
        <p>{plot}</p>
      </main>
      <footer>
        <p>director: {director}</p>
        <button onClick={() => onMoviedelete(id)}>Delete</button>
        <button onClick={() => onMovieSelect(id)}>Select</button>
      </footer>
    </article>
  );
}
