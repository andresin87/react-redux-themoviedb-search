import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Search from '../Search';
import store from '../../../config/mockStore';
import { fetchPopular, fetchGenres } from '../../../actions';

jest.mock('../../../actions');

describe('Search component', () => {
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
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const store = mockStore({
      search: { movies: [], isLoading: false },
      genres: { names: {}, isLoading: false },
    });
    const component = (
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <Search />
        </MemoryRouter>
      </Provider>
    );

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
