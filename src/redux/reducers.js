import * as actionType from "./actionTypes";
export function rootReducer(state, action) {
  switch (action.type) {
    default:
      return state;
    case actionType.SET_SESSION_TOKEN:
      return { ...state, sessionToken: action.payload.sessionToken };
  }
}
