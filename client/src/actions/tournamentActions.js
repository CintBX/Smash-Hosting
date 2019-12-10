import { GET_TOURNAMENTS, ADD_TOURNAMENT, DELETE_TOURNAMENT, TOURNAMENTS_LOADING } from './types';

export const getTournaments = () => {
	return {
		type: GET_TOURNAMENTS
	};
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