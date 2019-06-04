import * as actionType from "./actionTypes";

let initialState = {};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case actionType.ADD_SESSION_TOKEN:
      return { ...state, sessionToken: action.payload.sessionToken };
  }
}

export function rootReducerWithInitialState(state) {
  initialState = state;
  return rootReducer;
}
