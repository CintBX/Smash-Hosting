import { GET_FIGHTERS, FIGHTERS_LOADING } from '../actions/types';

const initialState = {
	fighters: [],
	loading: false
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_FIGHTERS:
			return {
				...state,
				fighters: action.payload,
				loading: false
			}

		case FIGHTERS_LOADING:
			return {
				...state,
				loading: true
			}

		default:
			return state;
	}
}