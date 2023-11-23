import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7a5fc2dada6a40475efd14410833dffd';

export async function fetchMovies(endPoint) {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
}

export async function fetchSearchMovies(endPoint, query) {
  const response = await axios.get(
    `${BASE_URL}${endPoint}?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
}
