import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { Table } from 'antd';

import SearchTable from '../SearchTable';
import store from '../../../config/mockStore';
import state from '../../../config/mockState.js';
import { selectorSearch, selectorGenres } from '../../../reducers';

jest.mock('../../../reducers');

describe('SearchTable component', () => {
  const mockSearch = state.search;
  const mockGenres = state.genres;
  const initialEntries = ['/'];
  const component = (
    <MemoryRouter initialEntries={initialEntries}>
      <Provider store={store}>
        <SearchTable />
      </Provider>
    </MemoryRouter>
  );

  beforeEach(() => {
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

  it('Check the rowKey function', () => {
    const tree = TestUtils.renderIntoDocument(component);
    const table = TestUtils.findRenderedComponentWithType(tree, Table);
    const id = 'myItemId';
    const record = { id };
    const { rowKey } = table.props;
    expect(rowKey(record)).toEqual(id);
  });

  it('Check that on row click launchs an action', () => {
    const tree = TestUtils.renderIntoDocument(component);
    const table = TestUtils.findRenderedComponentWithType(tree, Table);
    const { onRow } = table.props;
    const id = 123;
    const record = { id };
    const onRowOnClickCallback = onRow(record).onClick;

    tree.history.push = jest.fn();
    onRowOnClickCallback();

    expect(tree.history.push).toBeCalled();
    expect(tree.history.push.mock.calls[0][0]).toEqual({
      pathname: '/detail/123',
      state: { dataSource: mockSearch.movies },
    });
  });
});
