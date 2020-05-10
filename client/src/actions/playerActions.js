import { 
	GET_PLAYERS,
	SHOW_PLAYER,
	PLAYERS_LOADING, 
	PLAYER_LOADING
} from './types';
import axios from 'axios';
import { returnErrors } from './errorActions';

export const getPlayers = () => dispatch => {
	dispatch(allPlayersLoading());
	axios
		.get('/users')
		.then(res => dispatch({
			type: GET_PLAYERS,
			payload: res.data
		}))
		.catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const showPlayer = id => dispatch => {
	dispatch(onePlayerLoading());
	axios
		.get(`/users/${id}`)
		.then(() => dispatch({
			type: SHOW_PLAYER,
			payload: id
		}))
		.catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const allPlayersLoading = () => {
	return {
		type: PLAYERS_LOADING
	}
};

export const onePlayerLoading = () => {
	return {
		type: PLAYER_LOADING
	}
};