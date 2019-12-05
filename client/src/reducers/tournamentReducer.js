import { GET_TOURNAMENTS, ADD_TOURNAMENT, DELETE_TOURNAMENT } from '../actions/types';
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
		},
		{ 
			id: uuid(),
			status: "Open",
			title: "Double Elimination", 
			description: "Double Elim tournament rules go in this space.", 
			entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"],
			hostedBy: "Sille",
		},
		{ 
			id: uuid(),
			status: "Closed",
			title: "Round Robin", 
			description: "Round Robin tournament rules go in this space.", 
			entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"],
			hostedBy: "Ian",
		},
		{ 
			id: uuid(),
			status: "Complete",
			title: "Standard Rules", 
			description: "Standard tournament rules go in this space.", 
			entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"],
			hostedBy: "GucciRob",
		}
	]
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_TOURNAMENTS:
			return {
				...state
			};
		default:
			return state;
	};
};