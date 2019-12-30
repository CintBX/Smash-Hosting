import { GET_FIGHTERS, FIGHTERS_LOADING } from './types';
import axios from 'axios';
import { returnErrors } from './errorActions';

export const getFighters = () => dispatch => {
	dispatch(setFightersLoading());
	axios.get('/users')
	.then(res => dispatch({
		type: GET_FIGHTERS,
		payload: res.data
	}))
	.catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setFightersLoading = () => {
	return {
		type: FIGHTERS_LOADING
	}
};