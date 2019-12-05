import { GET_TOURNAMENTS, ADD_TOURNAMENT, DELETE_TOURNAMENT } from './types';

export const getTournaments = () => {
	return {
		type: GET_TOURNAMENTS
	};
};