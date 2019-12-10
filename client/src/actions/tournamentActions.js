import { GET_TOURNAMENTS, ADD_TOURNAMENT, DELETE_TOURNAMENT } from './types';

export const getTournaments = () => {
	return {
		type: GET_TOURNAMENTS
	};
};

export const deleteTournament = id => {
	return {
		type: DELETE_TOURNAMENT,
		payload: id
	}
};

export const addTournament = tournament => {
	return {
		type: ADD_TOURNAMENT,
		payload: tournament
	}
};