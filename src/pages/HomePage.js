import { useEffect, useState } from 'react';
import { fetchMovies } from '../api';
import { MoviesList } from 'components/MoviesList/MoviesList';

export default function HomePage() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    if (films.length > 0) return;
    async function fetchMoviesData() {
      try {
        const fetchedMovies = await fetchMovies();
        setFilms(fetchedMovies.results);
      } catch (error) {
      } finally {
      }
    }

    fetchMoviesData();
  }, [films]);

  return (
    <div>
      <h2>Trending today</h2>
      {films.length > 0 && <MoviesList films={films} />}
    </div>
  );
}
