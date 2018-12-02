import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mockComponent } from '../../utils/testUtils';
import { fetchPopular, fetchGenres } from '../../actions';

import App from '../App';

jest.mock('../../actions');

jest.mock('../Search/SearchBar', () => {
  return props => mockComponent('SearchBar', props);
});
jest.mock('../Search/SearchTable', () => {
  return props => mockComponent('SearchTable', props);
});

describe('App component', () => {
  const component = <App />;

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
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
