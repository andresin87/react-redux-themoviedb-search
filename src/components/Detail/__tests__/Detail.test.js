import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mockComponent } from '../../../utils/testUtils';

import Detail from '../Detail';
import store from '../../../config/mockStore';
import state from '../../../config/mockState.js';
import { fetchSearchById } from '../../../actions';
import { selectorDetail } from '../../../reducers';

jest.mock('../../../reducers');
jest.mock('../DetailInfoItem', () => {
  return props => mockComponent('DetailInfoItem', props);
});
jest.mock('../DetailInfoHeader', () => {
  return props => mockComponent('DetailInfoHeader', props);
});
jest.mock('../DetailInfoHomeButton', () => {
  return props => mockComponent('DetailInfoHomeButton', props);
});

jest.mock('../../../actions');

describe('Detail component', () => {
  const mockDetail = state.detail;
  const id = '550';
  const initialEntries = ['/', `/detail/${id}`];
  const location = { pathname: id };
  const component = (
    <Provider store={store}>
      <MemoryRouter initialEntries={initialEntries}>
        <Detail location={location} />
      </MemoryRouter>
    </Provider>
  );

  beforeEach(() => {
    fetchSearchById.mockReturnValue({ type: 'fetchSearchById' });
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

  it('Calls to fetchSearchById with the ID of the film on load', () => {
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    expect(fetchSearchById).toHaveBeenCalledTimes(1);
    expect(fetchSearchById).toHaveBeenCalledWith(id);
  });

  describe(`Doesn't call to fetchSearchById`, () => {
    it('No location', () => {
      const location = null;
      const component = (
        <Provider store={store}>
          <MemoryRouter initialEntries={initialEntries}>
            <Detail location={location} />
          </MemoryRouter>
        </Provider>
      );

      const div = document.createElement('div');
      ReactDOM.render(component, div);
      expect(fetchSearchById).not.toBeCalled();
    });

    it('No pathname', () => {
      const location = { pathname: null };
      const component = (
        <Provider store={store}>
          <MemoryRouter initialEntries={initialEntries}>
            <Detail location={location} />
          </MemoryRouter>
        </Provider>
      );

      const div = document.createElement('div');
      ReactDOM.render(component, div);
      expect(fetchSearchById).not.toBeCalled();
    });

    it('No id', () => {
      const initialEntries = ['/', `/detail/`];
      const location = { pathname: '/detail/' };
      const component = (
        <Provider store={store}>
          <MemoryRouter initialEntries={initialEntries}>
            <Detail location={location} />
          </MemoryRouter>
        </Provider>
      );

      const div = document.createElement('div');
      ReactDOM.render(component, div);
      expect(fetchSearchById).not.toBeCalled();
    });
  });
});
