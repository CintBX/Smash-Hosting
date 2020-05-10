import { GET_PLAYERS, PLAYERS_LOADING } from './types';
import axios from 'axios';
import { returnErrors } from './errorActions';

export const getPlayers = () => dispatch => {
	dispatch(setPlayersLoading());
	axios.get('/users')
	.then(res => dispatch({
		type: GET_PLAYERS,
		payload: res.data
	}))
	.catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setPlayersLoading = () => {
	return {
		type: PLAYERS_LOADING
	}
};