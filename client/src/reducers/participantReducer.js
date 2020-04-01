import { USER_JOINS_TOURNAMENT } from '../actions/types';

const initialState = {
  participant: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case USER_JOINS_TOURNAMENT:
      return {
        ...state,
        participant: action.payload
      }

    default:
      return state;
  };
};