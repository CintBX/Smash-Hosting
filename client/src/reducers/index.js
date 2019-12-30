import { combineReducers } from 'redux';
import tournamentReducer from './tournamentReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import fighterReducer from './fighterReducer';

export default combineReducers({
	tournament: tournamentReducer,
	error: errorReducer,
	auth: authReducer,
	fighter: fighterReducer
});