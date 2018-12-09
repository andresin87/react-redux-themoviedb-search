import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import DetailPoster from '../DetailPoster';
import store from '../../../config/mockStore';
import state from '../../../config/mockState.js';
import { selectorDetail } from '../../../reducers';

jest.mock('../../../reducers');

describe('DetailPoster component', () => {
  const mockDetail = state.detail;
  const component = (
    <Provider store={store}>
      <DetailPoster />
    </Provider>
  );

  beforeEach(() => {
    selectorDetail.mockReturnValue(mockDetail);
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

  it('Return null if poster_path is not defined', () => {
    const mockDetail = {
      movie: { title: 'The title' },
    };
    selectorDetail.mockReturnValue(mockDetail);
    const tree = renderer.create(component).toJSON();
    expect(tree).toBeNull();
  });
});
