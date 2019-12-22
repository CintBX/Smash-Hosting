import {
	USER_LOADING,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	// EDIT_USER
} from './types';
import axios from 'axios';
import { returnErrors } from './errorActions';



// Configuring EDIT_USER action.  Will put this below once it works.
// export const editUser = ({ id, main, secondary, friendCode }) => dispatch => {
// 	const config = {
// 		headers: {
// 			"Content-Type": "application/json"
// 		}
// 	};

// 	const body = JSON.stringify({ main, secondary, friendCode });

// 	axios.post(`/users/user/edit/${id}`, body, config)
// 		.then(res => dispatch({
// 			type: EDIT_USER,
// 			payload: res.data
// 		}))
// 		.catch(err => {
// 			dispatch(returnErrors(err.response.data, err.response.status));
// 		});
// };




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


export const register = ({ username, password, friendCode }) => dispatch => {
	// Headers
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	// Request Body (username, password)
	const body = JSON.stringify({ username, password, friendCode });

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


export const logout = () => {
	return {
		type: LOGOUT_SUCCESS
	};
};


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