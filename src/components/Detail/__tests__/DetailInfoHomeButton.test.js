import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import DetailInfoHomeButton from '../DetailInfoHomeButton';

describe('DetailInfoHomeButton component', () => {
  const component = (
    <Router>
      <DetailInfoHomeButton />
    </Router>
  );

  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Snapshot matchs', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
