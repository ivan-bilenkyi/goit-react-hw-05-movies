import { fetchMovieDetails } from 'api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function getDetails() {
      try {
        const fechedDetails = await fetchMovieDetails(movieId);
        setMovie(fechedDetails);
      } catch (error) {}
    }

    getDetails();
  }, [movieId]);
  if (!movie) {
    return;
  }

  const {
    poster_path,
    title,
    original_title,
    release_date,
    genres,
    vote_average,
    overview,
  } = movie;
  return (
    <section>
      <h2>Movie Details:</h2>

      {movie && (
        <>
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w342${poster_path}`}
              alt={title}
              width="200"
            />
            <div>
              <h3>{original_title}</h3>
              <p>
                <b>Release date:</b> {release_date}
              </p>
              <p>
                <b>Genres:</b>{' '}
                {genres.map(({ name }) => `${name.toLowerCase()} | `)}
              </p>
              <p>
                <b>Ranking:</b> {vote_average}
              </p>
              <p>
                <b>Overview:</b> {overview}
              </p>
            </div>
          </div>
          <h3>Additional information:</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>

          <Outlet />
        </>
      )}
    </section>
  );
}
