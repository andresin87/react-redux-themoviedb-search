import {
  POPULAR_FETCH_REQUEST,
  POPULAR_FETCH_SUCCESS,
  POPULAR_FETCH_FAILURE,
  SEARCH_FETCH_REQUEST,
  SEARCH_FETCH_SUCCESS,
  SEARCH_FETCH_FAILURE,
} from '../../actions';
import reducer from '../search';

describe('Search Reducer', () => {
  const movies = [
    {
      movieId: 'movieId 01',
      movieName: 'movieName 01',
    },
    {
      movieId: 'movieId 02',
      movieName: 'movieName 02',
    },
  ];

  it('Default value', () => {
    const action = {};
    const initialState = undefined;
    const expectedState = {
      isLoading: false,
      movies: [],
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: POPULAR_FETCH_REQUEST', () => {
    const action = {
      type: POPULAR_FETCH_REQUEST,
    };
    const initialState = {
      isLoading: false,
      movies: [],
    };
    const expectedState = {
      isLoading: true,
      movies: [],
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: POPULAR_FETCH_SUCCESS', () => {
    const action = {
      type: POPULAR_FETCH_SUCCESS,
      payload: {
        response: {
          data: {
            results: movies,
          },
        },
      },
    };
    const initialState = {
      isLoading: true,
      movies: [],
    };
    const expectedState = {
      isLoading: false,
      movies,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: POPULAR_FETCH_FAILURE', () => {
    const action = {
      type: POPULAR_FETCH_FAILURE,
    };
    const initialState = {
      isLoading: true,
      movies,
    };
    const expectedState = {
      isLoading: false,
      movies: [],
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: SEARCH_FETCH_REQUEST', () => {
    const action = {
      type: SEARCH_FETCH_REQUEST,
    };
    const initialState = {
      isLoading: false,
      movies: [],
    };
    const expectedState = {
      isLoading: true,
      movies: [],
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: SEARCH_FETCH_SUCCESS', () => {
    const action = {
      type: SEARCH_FETCH_SUCCESS,
      payload: {
        response: {
          data: {
            results: movies,
          },
        },
      },
    };
    const initialState = {
      isLoading: true,
      movies: [],
    };
    const expectedState = {
      isLoading: false,
      movies,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: SEARCH_FETCH_FAILURE', () => {
    const action = {
      type: SEARCH_FETCH_FAILURE,
    };
    const initialState = {
      isLoading: true,
      movies,
    };
    const expectedState = {
      isLoading: false,
      movies: [],
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
