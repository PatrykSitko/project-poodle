import * as actionType from "./actionTypes";

export function setToken(token) {
  return { type: actionType.SET_TOKEN, payload: { token } };
}
export function setUrl(url) {
  return { type: actionType.SET_URL, payload: { url } };
}
export function setData(data) {
  return {
    type: actionType.SET_DATA,
    payload: { data }
  };
}
export function setWidth(width) {
  return {
    type: actionType.SET_WIDTH,
    payload: { width }
  };
}
export function setHeight(height) {
  return {
    type: actionType.SET_HEIGHT,
    payload: { height }
  };
}

export function setMousedown(boolean) {
  return { type: actionType.SET_MOUSEDOWN, payload: { mousedown: boolean } };
}
