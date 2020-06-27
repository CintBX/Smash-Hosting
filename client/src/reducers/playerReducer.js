import { 
	GET_PLAYERS,
	SHOW_PLAYER,
	PLAYERS_LOADING, 
	PLAYER_LOADING,
	DELETE_A_USER
} from '../actions/types';

const initialState = {
	players: [],
	showPlayer: "",
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

		case SHOW_PLAYER: {
			return {
				...state,
				showPlayer: state.players.find(player => player._id === action.payload),
				loading: false
			}
		}

		case PLAYERS_LOADING:
		case PLAYER_LOADING:
			return {
				...state,
				loading: true
			}

		case DELETE_A_USER:
			return {
				...state,
				players: state.players.filter(player => player._id !== action.payload)
			}

		default:
			return state;
	}
}