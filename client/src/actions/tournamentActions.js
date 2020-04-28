import { 
	GET_TOURNAMENTS, 
	DISPLAY_TOURNAMENT, 
	ADD_TOURNAMENT, 
	DELETE_TOURNAMENT, 
	TOURNAMENTS_LOADING, 
	TOURNAMENT_LOADING 
} from './types';
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

export const showTournament = id => dispatch => {
	dispatch(singleTourneyLoading());	
	axios
		.get(`/tournaments/${id}`)
		.then(() => dispatch({
			type: DISPLAY_TOURNAMENT,
			payload: id
		}))
		.catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addTournament = tournament => (dispatch, getState) => {
	axios
		.post('/tournaments/new', tournament, tokenConfig(getState))
		.then(() => dispatch({
			type: ADD_TOURNAMENT,
			payload: tournament
		}))
		.catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

	axios
		.get('/tournaments')
		.then(res => dispatch({
			type: GET_TOURNAMENTS,
			payload: res.data
		}));
};

export const deleteTournament = id => (dispatch, getState) => {
	axios
		.delete(`/tournaments/${id}`, tokenConfig(getState))
		.then(res => dispatch({
			type: DELETE_TOURNAMENT,
			payload: id
		}))
		.catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setTourneysLoading = () => {
	return {
		type: TOURNAMENTS_LOADING
	};
};

export const singleTourneyLoading = () => {
	return {
		type: TOURNAMENT_LOADING
	};
};