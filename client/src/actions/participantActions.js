import { USER_JOINS_TOURNAMENT } from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const addParticipant = user => (dispatch, getState) => {
  axios.post('/tournaments/:id', tokenConfig(getState))
    .then(res => dispatch({
      type: USER_JOINS_TOURNAMENT,
      payload: user
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};