import { combineReducers } from 'redux';
import tournamentReducer from './tournamentReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import playerReducer from './playerReducer';

export default combineReducers({
	tournament: tournamentReducer,
	error: errorReducer,
	auth: authReducer,
	player: playerReducer,
});