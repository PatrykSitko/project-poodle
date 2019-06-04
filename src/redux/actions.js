import * as actionType from "./actionTypes";

export function addSessionToken(sessionToken) {
  return { type: actionType.ADD_SESSION_TOKEN, payload: { sessionToken } };
}
