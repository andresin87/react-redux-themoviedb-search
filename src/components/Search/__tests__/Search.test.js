import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Search from '../Search';
import store from '../../../config/mockStore';

import { fetchPopular } from '../../../actions';

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
});
