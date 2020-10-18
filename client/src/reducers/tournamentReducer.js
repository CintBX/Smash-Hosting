import { 
	GET_TOURNAMENTS, 
	SHOW_TOURNAMENT, 
	ADD_TOURNAMENT,
	ADD_TOURNAMENT_FAIL,
	EDIT_TOURNAMENT,
	EDIT_TOURNAMENT_FAIL,
	DELETE_TOURNAMENT, 
	TOURNAMENTS_LOADING, 
	TOURNAMENT_LOADING,
	USER_JOINS_TOURNAMENT, 
	TOURNAMENT_SIGN_UP_FAIL,
	TOURNAMENT_STATUS_UPDATE,
	TOURNAMENT_STATUS_FAILED,
	ADD_ROUND_OF_PLAYERS,
	ADD_ROUND_FAILED
} from '../actions/types';

const initialState = {
	tournaments: [],
	showTournament: "",
	loading: false,
};

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

		case EDIT_TOURNAMENT:
			return {
				...state,
				...state.tournaments.find(tournament => tournament._id === action.payload._id)
			}
			
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
				...state.showTournament.status = action.payload
			};

		case ADD_ROUND_OF_PLAYERS:
			return {
				...state,
				...state.showTournament.rounds.push(action.payload)
			}

		case ADD_TOURNAMENT_FAIL:
		case EDIT_TOURNAMENT_FAIL:
		case TOURNAMENT_SIGN_UP_FAIL:
		case TOURNAMENT_STATUS_FAILED:
		case ADD_ROUND_FAILED:
			return {
				...state,
			}

		default:
			return state;
	};
};