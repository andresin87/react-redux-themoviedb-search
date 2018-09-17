import {
	POPULAR_FETCH_REQUEST,
	POPULAR_FETCH_SUCCESS,
	SEARCH_FETCH_REQUEST,
	SEARCH_FETCH_SUCCESS,
	DETAIL_FETCH_REQUEST,
	DETAIL_FETCH_SUCCESS,
	GENRES_FETCH_REQUEST,
	GENRES_FETCH_SUCCESS,
} from '../index';

import {
	fetchPopular,
	fetchSearch,
	fetchSearchById,
	fetchGenres,
	doFetch,
} from '../index';

describe('Action creators: ', () => {
	it('fetchPopular', async () => {
		// prepare
		const expected = [
			{
				type: POPULAR_FETCH_REQUEST,
				payload: { meta: {} },
			},
			{
				type: POPULAR_FETCH_SUCCESS,
				payload: { meta: {}, response: {} },
			},
		];

		// mock the dispatch and getState functions from Redux thunk.
		const dispatch = jest.fn();
		const getState = jest.fn(() => {});

		// execute
		await fetchPopular()(dispatch, getState);

		// verify
		expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
		expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
	});

	it('fetchSearch', async () => {
		// prepare
		const query = 'Fight Club';
		const expected = [
			{
				type: SEARCH_FETCH_REQUEST,
				payload: { meta: { query } },
			},
			{
				type: SEARCH_FETCH_SUCCESS,
				payload: { meta: { query }, response: {} },
			},
		];

		// mock the dispatch and getState functions from Redux thunk.
		const dispatch = jest.fn();
		const getState = jest.fn(() => {});

		// execute
		await fetchSearch(query)(dispatch, getState);

		// verify
		expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
		expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
	});
});

it('fetchSearchById', async () => {
	// prepare
	const id = '550';
	const expected = [
		{
			type: DETAIL_FETCH_REQUEST,
			payload: { meta: { id } },
		},
		{
			type: DETAIL_FETCH_SUCCESS,
			payload: { meta: { id }, response: {} },
		},
	];

	// mock the dispatch and getState functions from Redux thunk.
	const dispatch = jest.fn();
	const getState = jest.fn(() => {});

	// execute
	await fetchSearchById(id)(dispatch, getState);

	// verify
	expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
	expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
});

it('fetchGenres', async () => {
	// prepare
	const expected = [
		{
			type: GENRES_FETCH_REQUEST,
			payload: { meta: {} },
		},
		{
			type: GENRES_FETCH_SUCCESS,
			payload: { meta: {}, response: {} },
		},
	];

	// mock the dispatch and getState functions from Redux thunk.
	const dispatch = jest.fn();
	const getState = jest.fn(() => {});

	// execute
	await fetchGenres()(dispatch, getState);

	// verify
	expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
	expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
});

describe('Auxiliar functions of actions creators: ', () => {
	it('doFetch', async () => {
		// prepare
		const type = 'MY_TYPE';
		const url = 'http://myUrl:1234';
		const expected = [
			{
				type: type + '/REQUEST',
				payload: {
					meta: {},
				},
			},
			{
				type: type + '/SUCCESS',
				payload: {
					meta: {},
					response: {},
				},
			},
		];

		// mock the dispatch and getState functions from Redux thunk.
		const dispatch = jest.fn();
		const getState = jest.fn(() => {
			return {};
		});

		// execute
		await doFetch(type, url)(dispatch, getState);

		// verify
		expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
		expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
	});
});
