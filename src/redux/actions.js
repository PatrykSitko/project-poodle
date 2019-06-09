import * as actionType from "./actionTypes";

export function setToken(token) {
  return { type: actionType.SET_TOKEN, payload: { token } };
}
export function setUrl(url) {
  return { type: actionType.SET_URL, payload: { url } };
}
export function setUserData(data) {
  return {
    type: actionType.SET_USER_DATA,
    payload: { userData: data }
  };
}
