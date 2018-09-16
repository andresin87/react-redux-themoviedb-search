import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Detail from '../Detail';
import store from '../../../config/mockStore';

import { fetchSearchById } from '../../../actions';

jest.mock('../../../actions');

describe('Detail component', () => {
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
});
