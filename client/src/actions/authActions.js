import {
	USER_LOADING,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	UPDATE_SUCCESS
} from './types';
import axios from 'axios';
import { returnErrors } from './errorActions';

// --------------------------------------------------------------------------------------------------------
// ATTEMPTING TO CREATE UPDATE_SUCCESS, to add/change Main, Secondary


// UPDATE_SUCCESS: TESTING
// FIRST TRY (loadUser)
// export const update = () => (dispatch, getState) => {
// 	// User loading???
// 	dispatch({ type: USER_LOADING });

// 	axios.get('/users/user', tokenConfig(getState))
// 		.then(res => dispatch({
// 			type: UPDATE_SUCCESS,
// 			payload: res.data
// 		}))
// 		.catch(err => {
// 			dispatch(returnErrors(err.response.data, err.response.status));
// 		});
// };
// dispatch, getState (The user is already logged in, getState should be the thang)
// axios.get /users/user should be it, becaues the user is already is logged in
// tokenConfig, same shit, should be good cuz the user is logged in 
// DISPATCH: UPDATE_SUCCESS returns ...state, isAuthenticated:true, isLoading:false, user:action.payload
// returnErrors works on the Error object state msg:msg, should be fine regardless of this
// PROBLEM::: This is a `get` request, whereas I am actually sending/posting some data



// UPDATE_SUCCESS: TESTING
// SECOND TRY (login)
// export const addCharacter = ({ main, secondary }) => dispatch => {
// 	// Headers
// 	const config = {
// 		headers: {
// 			"Content-Type": "application/json"
// 		}
// 	};

// 	// Body
// 	const body = JSON.stringify({ main, secondary });

// 	axios.post('/users/user/:id', body, config)
// 		.then(res => dispatch({
// 			type: UPDATE_SUCCESS,
// 			payload: res.data
// 		}))
// 		.catch(err => {
// 			dispatch(returnErrors(err.response.data, err.response.status));
// 		});
// };
// update takes two params (non-required, so if they are missing it should be fine): main/secondary
// set headers config, makes sense, it needs to know it's application/json since this is data
// set body config to stringify the main/secondary.  Makes sense
// axios POST makes sense: you are POSTING data to the DB
// '/users/user/:id' needs to be created I think.  Another whole thang right there... jesus CHRIST!!!!!OPHER!!!
// response dispatch of UPDATE_SUCCESS.  If UPDATE_SUCCESS does the proper thing in the Reducer, this is right.
// payload is the data.. which, according to your form and state, will be main/secondary
// error catch, same as usual
// Wait wait wait.. The route.. Either, like loadUser:
// /users/user
// BUT isn't an ID required? Especially for editing?
// /users/user/:id
// You will need to create this route, but this should do it.  Research /users/user route and see why that works though


// ATTEMPTING TO CREATE UPDATE_SUCCESS, to add/change Main, Secondary
// --------------------------------------------------------------------------------------------------------



// ***** *****WORKING ACTIONS***** *****

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


export const register = ({ username, password, friendCode, main, secondary }) => dispatch => {
	// Headers
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	// Request Body (username, password)
	const body = JSON.stringify({ username, password, friendCode, main, secondary });

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