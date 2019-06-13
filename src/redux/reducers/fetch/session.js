import { SESSION_ESTABLISHED } from "../../actions/types";

export const initialSessionState = { url: undefined, token: undefined };

export default (state = initialSessionState, { type: action, payload }) => {
  switch (action) {
    default:
      return state;
    case SESSION_ESTABLISHED:
      return { ...state, ...payload };
  }
};
