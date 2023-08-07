import { MOVIES_URL } from './constants';

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getMovies = () => {
  return fetch(MOVIES_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => checkResponse(res));
};
