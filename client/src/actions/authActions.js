import {
	USER_LOADING,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	UPDATE_SUCCESS,
	UPDATE_DETAILS_FAILED,
	DELETE_ACCOUNT
} from './types';
import axios from 'axios';
import { returnErrors } from './errorActions';


// User updates or edits their main/secondary/friendCode
export const updateUserDetails = ({ _id, main, secondary, friendCode }) => dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	const body = JSON.stringify({ main, secondary, friendCode });

	axios.post(`/users/user/${_id}`, body, config)
		.then(res => dispatch({
			type: UPDATE_SUCCESS,
			payload: res.data
		}))
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: UPDATE_DETAILS_FAILED
			})
		});
};


// Check token and load user
export const loadUser = () => (dispatch, getState) => {
	// User Loading
	dispatch({ type: USER_LOADING });

	axios.get('/users/user', tokenConfig(getState))
		.then(res => dispatch({
			type: USER_LOADED,
			payload: res.data
		}))
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: AUTH_ERROR
			});
		});
};


// Register a new user
export const register = ({ username, password, passwordConfirmation, friendCode, main, secondary }) => dispatch => {
	// Headers
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	// Request Body (username, password)
	const body = JSON.stringify({ username, password, passwordConfirmation, friendCode, main, secondary });

	axios.post('/users/register', body, config)
		.then(res => dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		}))
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
			dispatch({
				type: REGISTER_FAIL
			});
		});
};


// Login existing user
export const login = ({ username, password }) => dispatch => {
	// Headers
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	// Request body
	const body = JSON.stringify({ username, password });

	axios.post('/users/login', body, config)
		.then(res => dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		}))
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status,'LOGIN_FAIL'));
			dispatch({
				type: LOGIN_FAIL
			});
		});
};


// Logout user session
export const logout = () => {
	return {
		type: LOGOUT_SUCCESS
	};
};


// Delete user account
export const deleteAccount = id => dispatch => {
	axios
		.delete(`/users/user/${id}`)
		.then(() => dispatch({
			type: DELETE_ACCOUNT,
			payload: id
		}))
		.catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};


// Token configuration
export const tokenConfig = getState => {
	// Get Token from LocalStorage
	const token = getState().auth.token;

	// Headers
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	// If there's a token, add it to Headers
	if(token) {
		config.headers['x-auth-token'] = token;
	};

	return config;
};