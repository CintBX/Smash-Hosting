import { combineReducers } from 'redux';
import tournamentReducer from './tournamentReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import playerReducer from './playerReducer';
import participantReducer from './participantReducer';

export default combineReducers({
	tournament: tournamentReducer,
	error: errorReducer,
	auth: authReducer,
	player: playerReducer,
	participant: participantReducer
});