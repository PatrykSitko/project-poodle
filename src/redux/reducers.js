import * as actionType from "./actionTypes";

export function rootReducer(state, action) {
  switch (action.type) {
    default:
      return state;
    case actionType.SET_TOKEN:
      return { ...state, token: action.payload.token };
    case actionType.SET_URL:
      return { ...state, url: action.payload.url };
    case actionType.SET_DATA:
      return { ...state, data: action.payload.data };
    case actionType.SET_WIDTH:
      return {
        ...state,
        width: action.payload.width
      };
    case actionType.SET_HEIGHT:
      return {
        ...state,
        height: action.payload.height
      };
    case actionType.SET_MOUSEDOWN:
      return { ...state, mousedown: action.payload.mousedown };
  }
}
