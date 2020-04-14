import { USER_JOINS_TOURNAMENT } from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const addParticipant = (_id, user) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ user });
  
  axios.post(`/tournaments/${_id}`, body, config)
    .then(res => dispatch({
      type: USER_JOINS_TOURNAMENT,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};