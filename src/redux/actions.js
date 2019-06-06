import * as actionType from "./actionTypes";

export function setSessionToken(sessionToken) {
  return { type: actionType.SET_SESSION_TOKEN, payload: { sessionToken } };
}
