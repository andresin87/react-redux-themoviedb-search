import {
  GENRES_FETCH_REQUEST,
  GENRES_FETCH_SUCCESS,
  GENRES_FETCH_FAILURE,
} from '../../actions';
import reducer, { selectorGenres } from '../genres';

describe('Genres Reducer', () => {
  const genresAsArray = [
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 16,
      name: 'Animation',
    },
  ];
  const genres = {
    12: 'Adventure',
    14: 'Fantasy',
    16: 'Animation',
  };

  it('Default value', () => {
    const action = {};
    const initialState = undefined;
    const expectedState = {
      isLoading: false,
      names: {},
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  describe('Action: GENRES_FETCH_SUCCESS', () => {
    it('With data', () => {
      const action = {
        type: GENRES_FETCH_SUCCESS,
        payload: {
          response: {
            data: {
              genres: genresAsArray,
            },
          },
        },
      };
      const initialState = {
        isLoading: true,
        names: {},
      };
      const expectedState = {
        isLoading: false,
        names: genres,
      };
      expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('Without data', () => {
      const action = {
        type: GENRES_FETCH_SUCCESS,
        payload: {
          response: {
            data: {
              genres: null,
            },
          },
        },
      };
      const initialState = {
        isLoading: true,
        names: genres,
      };
      const expectedState = {
        isLoading: false,
        names: {},
      };
      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });

  it('Action: GENRES_FETCH_REQUEST', () => {
    const action = {
      type: GENRES_FETCH_REQUEST,
    };
    const initialState = {
      isLoading: false,
      names: genres,
    };
    const expectedState = {
      isLoading: true,
      names: {},
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: GENRES_FETCH_FAILURE', () => {
    const action = {
      type: GENRES_FETCH_FAILURE,
    };
    const initialState = {
      isLoading: true,
      names: genres,
    };
    const expectedState = {
      isLoading: false,
      names: {},
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Selector: selectorGenres', () => {
    const genres = { a: 1, b: 2 };
    const state = {
      genres,
    };
    expect(selectorGenres(state)).toEqual(genres);
  });
});
