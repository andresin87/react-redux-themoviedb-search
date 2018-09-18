import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mockComponent } from '../../../utils/testUtils';

import Search from '../Search';
import store from '../../../config/mockStore';
import { fetchPopular, fetchGenres } from '../../../actions';

jest.mock('../../../actions');
jest.mock('../SearchBar', () => {
  return props => mockComponent('SearchBar', props);
});
jest.mock('../SearchTable', () => {
  return props => mockComponent('SearchTable', props);
});

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

  it('Calls to fetchPopular on load', () => {
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    expect(fetchPopular).toHaveBeenCalledTimes(1);
    expect(fetchPopular).toHaveBeenCalledWith();
  });

  it('Calls to fetchGenres on load', () => {
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    expect(fetchGenres).toHaveBeenCalledTimes(1);
    expect(fetchGenres).toHaveBeenCalledWith();
  });
});
