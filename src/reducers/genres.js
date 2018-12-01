import {
  GENRES_FETCH_REQUEST,
  GENRES_FETCH_SUCCESS,
  GENRES_FETCH_FAILURE,
} from '../actions';

const defaultState = {
  isLoading: false,
  names: {},
};

const normalizeGenres = genresAsArray => {
  const genres = {};
  genresAsArray.forEach(gender => {
    const { id, name } = gender;
    genres[id] = name;
  });
  return genres;
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case GENRES_FETCH_REQUEST:
      return { ...defaultState, isLoading: true };

    case GENRES_FETCH_SUCCESS: {
      if (!action.payload.response.data.genres) return defaultState;
      const { genres } = action.payload.response.data;
      return { names: normalizeGenres(genres), isLoading: false };
    }

    case GENRES_FETCH_FAILURE:
      return defaultState;

    default:
      return state;
  }
}

export const selectorGenres = state => state.genres;
