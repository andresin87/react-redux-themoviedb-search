import {
  POPULAR_FETCH_REQUEST,
  POPULAR_FETCH_SUCCESS,
  POPULAR_FETCH_FAILURE,
  SEARCH_FETCH_REQUEST,
  SEARCH_FETCH_SUCCESS,
  SEARCH_FETCH_FAILURE,
} from '../actions';

const defaultState = {
  isLoading: false,
  movies: [],
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case POPULAR_FETCH_REQUEST:
    case SEARCH_FETCH_REQUEST:
      return { ...defaultState, isLoading: true };

    case POPULAR_FETCH_SUCCESS:
    case SEARCH_FETCH_SUCCESS: {
      if (!action.payload.response.data) return defaultState;
      const { results } = action.payload.response.data;
      return { movies: results, isLoading: false };
    }

    case POPULAR_FETCH_FAILURE:
    case SEARCH_FETCH_FAILURE:
      return { ...defaultState };

    default:
      return state;
  }
}

export const selectorSearch = state => state.search;
