import { GET_TOURNAMENTS, ADD_TOURNAMENT, DELETE_TOURNAMENT, TOURNAMENTS_LOADING } from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getTournaments = () => dispatch => {
	dispatch(setTourneysLoading());
	axios
		.get('/tournaments')
		.then(res => dispatch({
			type: GET_TOURNAMENTS,
			payload: res.data
		}))
		.catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addTournament = tournament => dispatch => {
	axios
		.post('/tournaments/new', tournament)
		.then(res => dispatch({
			type: ADD_TOURNAMENT,
			payload: tournament
		}))
		.catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteTournament = id => dispatch => {
	axios
		.delete(`/tournaments/${id}`)
		.then(res => dispatch({
			type: DELETE_TOURNAMENT,
			payload: id
		}))
		.catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setTourneysLoading = () => {
	return {
		type: TOURNAMENTS_LOADING
	}
};