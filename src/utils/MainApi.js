import { API_URL } from './constants';

const mainHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const register = ({ name, email, password }) => {
  return fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: mainHeaders,
    body: JSON.stringify({ name, email, password }),
  }).then((res) => checkResponse(res));
};

export const authorize = ({ email, password }) => {
  return fetch(`${API_URL}/signin`, {
    method: 'POST',
    headers: mainHeaders,
    body: JSON.stringify({ email, password }),
  }).then((res) => checkResponse(res));
};

export const getUserInfo = () => {
  return fetch(`${API_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then((res) => checkResponse(res));
};

export const setUserInfo = ({ name, email }) => {
  return fetch(`${API_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then((res) => checkResponse(res));
};

export const getCards = () => {
  return fetch(`${API_URL}/movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then((res) => checkResponse(res));
};

export const addMovie = (movie) => {
  return fetch(`${API_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      // owner: movie.owner,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  }).then((res) => checkResponse(res));
};

export const deleteMovie = (movieId) => {
  return fetch(`${API_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then((res) => checkResponse(res));
};

export const getSavedMovies = () => {
  return fetch(`${API_URL}/movies`, {
    method: 'GET',
    headers: mainHeaders,
  }).then((res) => checkResponse(res));
};

export const getToken = (token) => {
  return fetch(`${API_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};
