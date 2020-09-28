import { 
	GET_TOURNAMENTS, 
	SHOW_TOURNAMENT, 
	ADD_TOURNAMENT, 
	DELETE_TOURNAMENT, 
	TOURNAMENTS_LOADING, 
	TOURNAMENT_LOADING,
	USER_JOINS_TOURNAMENT, 
	TOURNAMENT_SIGN_UP_FAIL,
	TOURNAMENT_STATUS_UPDATE,
	TOURNAMENT_STATUS_FAILED,
} from '../actions/types';

const initialState = {
	tournaments: [],
	showTournament: "",
	loading: false,
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_TOURNAMENTS:
			return {
				...state,
				tournaments: action.payload,
				loading: false
			};

		case SHOW_TOURNAMENT:
			return {
				...state,
				showTournament: state.tournaments.find(tournament => tournament._id === action.payload),
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

		case USER_JOINS_TOURNAMENT:
      return {
        ...state,
				...state.showTournament.participants.push(action.payload)
      };

    case TOURNAMENT_STATUS_UPDATE:
			return {
				...state,
				...state.showTournament.participants = action.payload.participants,
				...state.showTournament.status = action.payload.status
			};

		case TOURNAMENT_SIGN_UP_FAIL:
		case TOURNAMENT_STATUS_FAILED:
			return {
				...state,
			}

		default:
			return state;
	};
};