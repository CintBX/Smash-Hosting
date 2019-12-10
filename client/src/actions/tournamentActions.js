import { GET_TOURNAMENTS, ADD_TOURNAMENT, DELETE_TOURNAMENT, TOURNAMENTS_LOADING } from './types';
import axios from 'axios';

export const getTournaments = () => dispatch => {
	dispatch(setTourneysLoading());
	axios
		.get('/tournaments')
		.then(res => 
			dispatch({
				type: GET_TOURNAMENTS,
				payload: res.data
			})
		);
};

export const deleteTournament = id => {
	return {
		type: DELETE_TOURNAMENT,
		payload: id
	};
};

export const addTournament = tournament => {
	return {
		type: ADD_TOURNAMENT,
		payload: tournament
	};
};

export const setTourneysLoading = () => {
	return {
		type: TOURNAMENTS_LOADING
	}
};