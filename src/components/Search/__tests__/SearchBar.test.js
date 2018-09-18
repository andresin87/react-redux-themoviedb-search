import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { Input } from 'antd';
import { Provider } from 'react-redux';

import SearchBar from '../SearchBar';
import store from '../../../config/mockStore';
import { SEARCH_FETCH_REQUEST } from '../../../actions';

describe('SearchBar component', () => {
  const component = (
    <Provider store={store}>
      <SearchBar />
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

  it('Check that the search button launchs an action', () => {
    const tree = TestUtils.renderIntoDocument(component);
    const search = TestUtils.findRenderedComponentWithType(tree, Input.Search);
    const { onSearch } = search.props;

    //Call the function
    const query = 'Fight club';
    onSearch(query);

    const expectedActions = [
      {
        type: SEARCH_FETCH_REQUEST,
        payload: {
          meta: {
            query,
          },
        },
      },
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
