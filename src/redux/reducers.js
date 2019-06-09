import * as actionType from "./actionTypes";
export function rootReducer(state, action) {
  switch (action.type) {
    default:
      return state;
    case actionType.SET_TOKEN:
      return { ...state, token: action.payload.token };
    case actionType.SET_URL:
      return { ...state, url: action.payload.url };
    case actionType.SET_USER_DATA:
      return { ...state, userData: action.payload.userData };
  }
}
