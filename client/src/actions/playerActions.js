import { 
	GET_PLAYERS,
	SHOW_PLAYER,
	PLAYERS_LOADING, 
	PLAYER_LOADING,
	DELETE_A_USER
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
		.get(`/users/user/${id}`)
		.then(res => dispatch({
			type: SHOW_PLAYER,
			payload: res.data
		}))
		.catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// HINT: You may need tokenConfig//getState setup like tournamentAction.  Try first without it.
export const deleteThisPlayer = id => dispatch => {
	axios
		.delete(`/users/user/${id}`)
		.then(() => dispatch({
			type: DELETE_A_USER,
			payload: id
		}))
		.catch(err => returnErrors(err.response.data, err.response.status));
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