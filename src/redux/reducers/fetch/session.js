import { SESSION_ESTABLISHED } from "../../actions/types";

export const initialSessionState = { url: undefined, token: undefined };

export default (state = initialSessionState, { type: action, payload }) =>
  action === SESSION_ESTABLISHED ? { ...state, ...payload } : state;
