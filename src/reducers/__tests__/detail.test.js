import {
	DETAIL_FETCH_REQUEST,
	DETAIL_FETCH_SUCCESS,
	DETAIL_FETCH_FAILURE,
} from '../../actions';
import reducer from '../detail';

describe('Detail Reducer', () => {
	const movieInformation = { id: '550', name: 'Fight Club' };

	it('Default value', () => {
		const action = {};
		const initialState = undefined;
		const expectedState = {
			isLoading: false,
			movie: {},
		};
		expect(reducer(initialState, action)).toEqual(expectedState);
	});

	it('Action: DETAIL_FETCH_REQUEST', () => {
		const action = {
			type: DETAIL_FETCH_REQUEST,
		};
		const initialState = {
			isLoading: false,
			movie: {},
		};
		const expectedState = {
			isLoading: true,
			movie: {},
		};
		expect(reducer(initialState, action)).toEqual(expectedState);
	});

	it('Action: DETAIL_FETCH_SUCCESS', () => {
		const action = {
			type: DETAIL_FETCH_SUCCESS,
			payload: {
				response: {
					data: movieInformation,
				},
			},
		};
		const initialState = {
			isLoading: true,
			movie: {},
		};
		const expectedState = {
			isLoading: false,
			movie: movieInformation,
		};
		expect(reducer(initialState, action)).toEqual(expectedState);
	});

	it('Action: DETAIL_FETCH_FAILURE', () => {
		const action = {
			type: DETAIL_FETCH_FAILURE,
		};
		const initialState = {
			isLoading: true,
			movie: movieInformation,
		};
		const expectedState = {
			isLoading: false,
			movie: {},
		};
		expect(reducer(initialState, action)).toEqual(expectedState);
	});
});
