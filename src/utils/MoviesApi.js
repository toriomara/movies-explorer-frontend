// import { MOVIES_URL } from './constants';

// class MoviesApi {
//   constructor({ baseUrl, headers }) {
//     this._baseUrl = baseUrl;
//     this._headers = headers;
//   }

//   _request(url, options) {
//     return fetch(url, options).then(this._getResponse);
//   }

//   _getResponse(res) {
//     return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
//   }

//   getMovies() {
//     return this._request(`${this._baseUrl}/movies`, {
//       method: 'GET',
//       headers: this._headers,
//     });
//   }
// }

// export const movieApi = new MoviesApi({
//   baseUrl: MOVIES_URL,
//   headers: {
//     authorization: 'b063a258-13a4-49af-ad5b-48e5626339ec',
//     'Content-Type': 'application/json',
//   },
// });



// ==================================================================================== //

import { MOVIES_URL } from './constants';

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export const getMovies = () => {
  return fetch(MOVIES_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => checkResponse(res));
}

