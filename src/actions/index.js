import axios from 'axios';

// Get popular
export const POPULAR_FETCH = 'POPULAR@FETCH';
export const POPULAR_FETCH_REQUEST = 'POPULAR@FETCH/REQUEST';
export const POPULAR_FETCH_SUCCESS = 'POPULAR@FETCH/SUCCESS';
export const POPULAR_FETCH_FAILURE = 'POPULAR@FETCH/FAILURE';

// Search by term
export const SEARCH_FETCH = 'SEARCH@FETCH';
export const SEARCH_FETCH_REQUEST = 'SEARCH@FETCH/REQUEST';
export const SEARCH_FETCH_SUCCESS = 'SEARCH@FETCH/SUCCESS';
export const SEARCH_FETCH_FAILURE = 'SEARCH@FETCH/FAILURE';

// Search by id
export const DETAIL_FETCH = 'DETAIL@FETCH';
export const DETAIL_FETCH_REQUEST = 'DETAIL@FETCH/REQUEST';
export const DETAIL_FETCH_SUCCESS = 'DETAIL@FETCH/SUCCESS';
export const DETAIL_FETCH_FAILURE = 'DETAIL@FETCH/FAILURE';

// Search by term
export const GENRES_FETCH = 'GENRES@FETCH';
export const GENRES_FETCH_REQUEST = 'GENRES@FETCH/REQUEST';
export const GENRES_FETCH_SUCCESS = 'GENRES@FETCH/SUCCESS';
export const GENRES_FETCH_FAILURE = 'GENRES@FETCH/FAILURE';

const URL_API_THEMOVIEDB = 'https://api.themoviedb.org/3';
const URL_DEFAULT_PAGE = 1;
const URL_DEFAULT_LANGUAGE = 'en-US';
const URL_DEFAULT_INCLUDE_ADULT = 'false';
const URL_API_KEY = '6b396f8d9c44ac98a337ebc84dcda077';

export const fetchPopular = () => {
  const url = `${URL_API_THEMOVIEDB}/movie/popular?page=${URL_DEFAULT_PAGE}&language=${URL_DEFAULT_LANGUAGE}&api_key=${URL_API_KEY}`;
  const meta = {};
  return doFetch(POPULAR_FETCH, url, meta);
};

export const fetchSearch = query => {
  if (!query) return { type: SEARCH_FETCH_FAILURE };
  const url = `${URL_API_THEMOVIEDB}/search/movie?include_adult=${URL_DEFAULT_INCLUDE_ADULT}&page=${URL_DEFAULT_PAGE}&language=${URL_DEFAULT_LANGUAGE}&query=${query}&api_key=${URL_API_KEY}`;
  const meta = { query };
  return doFetch(SEARCH_FETCH, url, meta);
};

export const fetchSearchById = id => {
  if (!id) return { type: DETAIL_FETCH_FAILURE };
  const url = `${URL_API_THEMOVIEDB}/movie/${id}?language=${URL_DEFAULT_LANGUAGE}&api_key=${URL_API_KEY}`;
  const meta = { id };
  return doFetch(DETAIL_FETCH, url, meta);
};

export const fetchGenres = () => {
  const url = `${URL_API_THEMOVIEDB}/genre/movie/list?language=${URL_DEFAULT_LANGUAGE}&api_key=${URL_API_KEY}`;
  const meta = {};
  return doFetch(GENRES_FETCH, url, meta);
};

/*
 * Extracted from: https://github.com/reactjs/redux/issues/1676
 ***/
export const doFetch = (type, url, meta = {}) => {
  // Redux Thunk will inject dispatch here:
  return dispatch => {
    // Reducers may handle this to set a flag like isFetching
    dispatch({
      type: type + '/REQUEST',
      payload: {
        meta,
      },
    });

    //The response function
    const theResponse = response => {
      dispatch({
        type: type + '/SUCCESS',
        payload: {
          response,
          meta,
        },
      });
    };

    //The error function
    const theError = error => {
      dispatch({
        type: type + '/FAILURE',
        payload: {
          error,
          meta,
        },
      });
    };

    // Perform the actual API call
    return axios.get(url).then(theResponse, theError);
  };
};
