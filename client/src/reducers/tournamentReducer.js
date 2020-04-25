import { 
	GET_TOURNAMENTS, 
	DISPLAY_TOURNAMENT, 
	ADD_TOURNAMENT, 
	DELETE_TOURNAMENT, 
	TOURNAMENTS_LOADING, 
	TOURNAMENT_LOADING 
} from '../actions/types';

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

		case DISPLAY_TOURNAMENT:
			return {
				...state,
				tournaments: state.tournaments.map(tournament => tournament._id === action.payload ?
					{ tournament } :
					tournament
				),
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
				tournaments: state.tournaments.filter(tournament => tournament._id !== action.payload)
			};
			
		case TOURNAMENTS_LOADING:
		case TOURNAMENT_LOADING:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	};
};