import {
	DETAIL_FETCH_REQUEST,
	DETAIL_FETCH_SUCCESS,
	DETAIL_FETCH_FAILURE,
} from '../actions';

const defaultState = {
	isLoading: false,
	movie: {},
};

export default function(state = defaultState, action) {
	switch (action.type) {
		case DETAIL_FETCH_REQUEST:
			return { ...defaultState, isLoading: true };

		case DETAIL_FETCH_SUCCESS: {
			const { data } = action.payload.response;
			if (data) {
				return {
					movie: data,
					isLoading: false,
				};
			} else {
				return { ...defaultState };
			}
		}

		case DETAIL_FETCH_FAILURE:
			return { ...defaultState };

		default:
			return state;
	}
}
