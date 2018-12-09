import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Search from '../Search';
import store from '../../../config/mockStore';
import state from '../../../config/mockState.js';
import { fetchPopular, fetchGenres } from '../../../actions';
import { selectorSearch, selectorGenres } from '../../../reducers';

jest.mock('../../../actions');
jest.mock('../../../reducers');

describe('Search component', () => {
  const mockSearch = state.search;
  const mockGenres = state.genres;
  const initialEntries = ['/'];
  const component = (
    <Provider store={store}>
      <MemoryRouter initialEntries={initialEntries}>
        <Search />
      </MemoryRouter>
    </Provider>
  );

  beforeEach(() => {
    fetchPopular.mockReturnValue({ type: 'fetchPopular' });
    fetchGenres.mockReturnValue({ type: 'fetchGenres' });
    selectorSearch.mockReturnValue(mockSearch);
    selectorGenres.mockReturnValue(mockGenres);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Snapshot matchs', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('First mount: we must load the popular films', () => {
    const mockSearch = { movies: [], isLoading: false };
    const mockGenres = { names: {}, isLoading: false };

    beforeEach(() => {
      selectorSearch.mockReturnValue(mockSearch);
      selectorGenres.mockReturnValue(mockGenres);
    });

    it('Calls to fetchPopular on load', () => {
      const div = document.createElement('div');
      ReactDOM.render(component, div);
      expect(fetchPopular).toHaveBeenCalledTimes(1);
      expect(fetchPopular).toHaveBeenLastCalledWith();
    });

    it('Calls to fetchGenres on load', () => {
      const div = document.createElement('div');
      ReactDOM.render(component, div);
      expect(fetchGenres).toHaveBeenCalledTimes(1);
      expect(fetchGenres).toHaveBeenLastCalledWith();
    });
  });

  describe('Next mounts: we must mantain the current data', () => {
    it(`Doesn't call to fetchPopular on load`, () => {
      const div = document.createElement('div');
      ReactDOM.render(component, div);
      expect(fetchPopular).toHaveBeenCalledTimes(0);
    });

    it(`Doesn't call to fetchGenres on load`, () => {
      const div = document.createElement('div');
      ReactDOM.render(component, div);
      expect(fetchGenres).toHaveBeenCalledTimes(0);
    });
  });
});
