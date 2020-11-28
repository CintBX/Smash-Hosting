import { 
	GET_TOURNAMENTS, 
	SHOW_TOURNAMENT, 
	ADD_TOURNAMENT,
	ADD_TOURNAMENT_FAIL,
	EDIT_TOURNAMENT,
	EDIT_TOURNAMENT_FAIL,
	DELETE_TOURNAMENT, 
	TOURNAMENTS_LOADING, 
	TOURNAMENT_LOADING,
	USER_JOINS_TOURNAMENT, 
	TOURNAMENT_SIGN_UP_FAIL,
	TOURNAMENT_STATUS_UPDATE,
	TOURNAMENT_STATUS_FAILED,
	SHUFFLE_PARTICIPANTS,
	SHUFFLE_FAILED,
	ADD_ROUND,
	ADD_ROUND_FAILED,
	MATCHWINS_UPDATE,
	MATCHWINS_UPDATE_FAILED,
	TOURNAMENTS_PLAYED_UPDATE,
	TOURNAMENTS_PLAYED_UPDATE_FAILED,
	TOURNAMENT_WIN_UPDATE,
	TOURNAMENT_WIN_UPDATE_FAILED,
	SET_CHAMPION,
	SET_CHAMPION_FAILED,
	ADD_SCORE,
	ADD_SCORE_FAILED
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


export const addTournament = tournament => (dispatch, getState) => {
	axios
		.post('/tournaments/new', tournament, tokenConfig(getState))
		.then(() => dispatch({
			type: ADD_TOURNAMENT,
			payload: tournament
		}))
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: ADD_TOURNAMENT_FAIL
			});
		});

	axios
		.get('/tournaments')
		.then(res => dispatch({
			type: GET_TOURNAMENTS,
			payload: res.data
		}));
};


export const editTournament = ({ _id, title, description, type, schedule }) => dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	const body = JSON.stringify({ title, description, type, schedule });

	axios
		.post(`/tournaments/edit/${_id}`, body, config)
		.then(res => dispatch({
			type: EDIT_TOURNAMENT,
			payload: res.data
		}))
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: EDIT_TOURNAMENT_FAIL
			});
		});

	axios
		.get('/tournaments')
		.then(res => dispatch({
			type: GET_TOURNAMENTS,
			payload: res.data
		}));
};


export const showTournament = _id => dispatch => {
	dispatch(singleTourneyLoading());	
	axios
		.get(`/tournaments/${_id}`)
		.then(res => dispatch({
			type: SHOW_TOURNAMENT,
			payload: res.data
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


export const closeTournament = (_id, status = "Closed") => dispatch => {
	dispatch(singleTourneyLoading());
	
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};
	const body = JSON.stringify({ status });

	axios
		.post(`/tournaments/${_id}/close`, body, config)
		.then(() => dispatch({
			type: TOURNAMENT_STATUS_UPDATE,
			payload: status
		}))
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: TOURNAMENT_STATUS_FAILED
			});
		});
};


export const shuffleParticipants = (_id, participants) => dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};
	const body = JSON.stringify({ participants });

	axios
		.post(`/tournaments/${_id}/shuffle-players`, body, config)
		.then(() => dispatch({
			type: SHUFFLE_PARTICIPANTS,
			payload: participants
		}))
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: SHUFFLE_FAILED
			});
		});
};


export const addScore = (id, scores) => dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	const body = JSON.stringify({ scores });

	axios.post(`/tournaments/${id}/add-score`, body, config)
		.then(() => dispatch({
			type: ADD_SCORE,
			payload: scores
		}))
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: ADD_SCORE_FAILED
			});
		});
};


export const addRound = (_id, round) => dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};
	const body = JSON.stringify({ round })

	axios
		.post(`/tournaments/${_id}/add-round`, body, config)
		.then(() => dispatch({
			type: ADD_ROUND,
			payload: round
		}))
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: ADD_ROUND_FAILED
			});
		});
};


export const updateTournamentsPlayed = ({ _id, tournamentsPlayed }) => dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	const body = JSON.stringify({ tournamentsPlayed });

	axios.post(`/users/user/${_id}`, body, config)
		.then(res => dispatch({
			type: TOURNAMENTS_PLAYED_UPDATE,
			payload: res.data
		}))
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: TOURNAMENTS_PLAYED_UPDATE_FAILED
			});
		});
};


export const updateMatchWins = ({ _id, matchWins }) => dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	const body = JSON.stringify({ matchWins });

	axios.post(`/users/user/${_id}`, body, config)
		.then(res => dispatch({
			type: MATCHWINS_UPDATE,
			payload: res.data
		}))
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: MATCHWINS_UPDATE_FAILED
			});
		});
};


export const updateTournamentWins = ({ _id, tournamentWins }) => dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};
	
	const body = JSON.stringify({ tournamentWins });

	axios.post(`/users/user/${_id}`, body, config)
		.then(res => dispatch({
			type: TOURNAMENT_WIN_UPDATE,
			payload: res.data
		}))
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: TOURNAMENT_WIN_UPDATE_FAILED
			});
		});
};


export const setChampion = (id, user) => dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	const body = JSON.stringify({ user });

	axios.post(`/tournaments/${id}/set-champ`, body, config)
		.then(() => dispatch({
			type: SET_CHAMPION,
			payload: user
		}))
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: SET_CHAMPION_FAILED
			});
		});
};


export const completeTournament = (_id, status = "Complete") => dispatch => {
	dispatch(singleTourneyLoading());
	
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};
	const body = JSON.stringify({ status });

	axios
		.post(`/tournaments/${_id}/complete`, body, config)
		.then(() => dispatch({
			type: TOURNAMENT_STATUS_UPDATE,
			payload: status
		}))
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: TOURNAMENT_STATUS_FAILED
			});
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