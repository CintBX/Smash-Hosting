import { 
	GET_PLAYERS,
	SHOW_PLAYER,
	PLAYERS_LOADING, 
	PLAYER_LOADING
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
				showPlayer: state.players.find(player => player._id === action.payload)
			}
		}

		case PLAYERS_LOADING:
		case PLAYER_LOADING:
			return {
				...state,
				loading: true
			}

		default:
			return state;
	}
}