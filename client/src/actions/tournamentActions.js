import { 
	GET_TOURNAMENTS, 
	SHOW_TOURNAMENT, 
	ADD_TOURNAMENT, 
	DELETE_TOURNAMENT, 
	TOURNAMENTS_LOADING, 
	TOURNAMENT_LOADING,
	USER_JOINS_TOURNAMENT, 
	TOURNAMENT_SIGN_UP_FAIL,
	TOURNAMENT_STATUS_UPDATE,
	TOURNAMENT_STATUS_FAILED
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
			type: SHOW_TOURNAMENT,
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

export const updateTournamentStatus = (_id, status) => dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};
	const body = JSON.stringify({ status });

	axios
		.post(`/tournaments/update/${_id}`, body, config)
		.then(() => dispatch({
			type: TOURNAMENT_STATUS_UPDATE,
			payload: status
		}))
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: TOURNAMENT_STATUS_FAILED
			})
		});
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

export const addParticipant = (_id, user) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
	};
	
	const body = JSON.stringify({ user });
	
  axios.post(`/tournaments/${_id}`, body, config)
    .then(() => dispatch({
      type: USER_JOINS_TOURNAMENT,
      payload: user
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: TOURNAMENT_SIGN_UP_FAIL
      });
		});
		
		showTournament(_id);
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