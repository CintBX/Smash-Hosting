import { USER_JOINS_TOURNAMENT, TOURNAMENT_SIGN_UP_FAIL } from '../actions/types';

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

    case TOURNAMENT_SIGN_UP_FAIL:
      return {
        ...state,
        participant: null
      }

    default:
      return state;
  };
};