import { GET_TOURNAMENTS, NEW_TOURNAMENT, DELETE_TOURNAMENT } from '../actions/types';
import uuid from 'uuid';

const initialState = {
	tournaments: [
		{ 
			id: uuid(),
			status: "Open",
			title: "Single Elimination", 
			description: "Single Elim tournament rules go in this space.", 
			entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"],
			hostedBy: "Apollo",
		}
	]
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_TOURNAMENTS:
			return {
				...state
			};
		case NEW_TOURNAMENT:
			return {
				...state,
				tournaments: [action.payload, ...state.tournaments]
			};
		case DELETE_TOURNAMENT:
			return {
				...state,
				tournaments: state.tournaments.filter(tournament => tournament.id !== action.payload)
			};
		default:
			return state;
	};
};