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
	SHUFFLE_PARTICIPANTS,
	SHUFFLE_FAILED,
	ADD_ROUND,
	ADD_ROUND_FAILED,
	MATCHWINS_UPDATE,
	MATCHWINS_UPDATE_FAILED,
	SET_CHAMPION,
	SET_CHAMPION_FAILED
} from '../actions/types';

const initialState = {
	tournaments: [],
	showTournament: {},
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
				showTournament: action.payload,
				loading: false
			};
			
		case ADD_TOURNAMENT:
			return {
				...state,
				tournaments: [...state.tournaments, action.payload]
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
				showTournament: {
					...state.showTournament,
					participants: [...state.showTournament.participants, action.payload]
				}
      };

    case TOURNAMENT_STATUS_UPDATE:
			return {
				...state,
				showTournament: {
					...state.showTournament,
					status: action.payload
				},
				loading: false
			};

		case SHUFFLE_PARTICIPANTS:
			return {
				...state,
				showTournament: {
					...state.showTournament,
					bracket: {
						...state.showTournament.bracket,
						players: [...state.showTournament.bracket.players, ...action.payload]
					}
				}
			};

		case ADD_ROUND:
			return {
				...state,
				showTournament: {
					...state.showTournament,
					bracket: {
						...state.showTournament.bracket,
						rounds: [...state.showTournament.bracket.rounds, action.payload]
					}
				}
			};

		case SET_CHAMPION:
			return {
				...state,
				showTournament: {
					...state.showTournament,
					bracket: {
						...state.showTournament.bracket,
						champion: [...state.showTournament.bracket.champion, action.payload]
					}
				}
			};
			
		case SET_CHAMPION_FAILED:
		case MATCHWINS_UPDATE:
		case MATCHWINS_UPDATE_FAILED:
		case EDIT_TOURNAMENT:
		case ADD_TOURNAMENT_FAIL:
		case EDIT_TOURNAMENT_FAIL:
		case TOURNAMENT_SIGN_UP_FAIL:
		case TOURNAMENT_STATUS_FAILED:
		case SHUFFLE_FAILED:
		case ADD_ROUND_FAILED:
			return {
				...state,
			};

		default:
			return state;
	};
};