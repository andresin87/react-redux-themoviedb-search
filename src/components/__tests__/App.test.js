import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mockComponent } from '../../utils/testUtils';

import App from '../App';

jest.mock('../Search/Search', () => {
  return props => mockComponent('Search', props);
});

describe('App component', () => {
  const component = <App />;

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
