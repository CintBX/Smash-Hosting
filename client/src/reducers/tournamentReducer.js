import { GET_TOURNAMENTS, ADD_TOURNAMENT, DELETE_TOURNAMENT, TOURNAMENTS_LOADING } from '../actions/types';

const initialState = {
	tournaments: [],
	loading: false
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_TOURNAMENTS:
			return {
				...state,
				tournaments: action.payload,
				loading: false
			};
		case ADD_TOURNAMENT:
			return {
				...state,
				tournaments: [action.payload, ...state.tournaments]
			};
		case DELETE_TOURNAMENT:
			return {
				...state,
				tournaments: state.tournaments.filter(tournament => tournament.id !== action.payload)
			};
		case TOURNAMENTS_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	};
};