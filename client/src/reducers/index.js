import { combineReducers } from 'redux';
import tournamentReducer from './tournamentReducer';

export default combineReducers({
	tournament: tournamentReducer
});