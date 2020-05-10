import { GET_PLAYERS, PLAYERS_LOADING } from '../actions/types';

const initialState = {
	players: [],
	loading: false
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_PLAYERS:
			return {
				...state,
				players: action.payload,
				loading: false
			}

		case PLAYERS_LOADING:
			return {
				...state,
				loading: true
			}

		default:
			return state;
	}
}