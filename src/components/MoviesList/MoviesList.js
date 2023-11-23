import { Link } from 'react-router-dom';

export const MoviesList = ({ films }) => {
  return (
    <div>
      <ul>
        {films.map(({ id, original_title }) => (
          <Link key={id} to={`/movies/${id}`}>
            <p>{original_title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};
