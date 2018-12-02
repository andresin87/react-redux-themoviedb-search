import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { List } from 'antd';

import DetailInfo from '../DetailInfo';
import store from '../../../config/mockStore';

describe('DetailInfo component', () => {
  const component = (
    <Provider store={store}>
      <Router>
        <DetailInfo />
      </Router>
    </Provider>
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

  it('Check the rowKey function', () => {
    const item = {
      key: 'budget',
      label: 'Budget',
      type: 'currency',
      value: 63000000,
    };
    const tree = TestUtils.renderIntoDocument(component);
    const list = TestUtils.findRenderedComponentWithType(tree, List);
    const { renderItem } = list.props;
    expect(renderItem(item)).toMatchSnapshot();
  });
});
