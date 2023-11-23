import { fetchSearchMovies } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState } from 'react';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);

  const fetchMovies = async query => {
    try {
      const fetchedMovies = await fetchSearchMovies(query);
      setFilms(fetchedMovies.results);
    } catch (error) {
    } finally {
    }
  };
  const onInputChange = evt => {
    setQuery(evt.target.value);
  };

  const onSubmitForm = evt => {
    evt.preventDefault();

    fetchMovies(query);
  };
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={onInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {films.length > 0 && <MoviesList films={films} />}
    </>
  );
}
