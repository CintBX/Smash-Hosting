import { GET_TOURNAMENTS, NEW_TOURNAMENT, DELETE_TOURNAMENT } from './types';

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

export const newTournament = tournament => {
	return {
		type: NEW_TOURNAMENT,
		payload: tournament
	}
};