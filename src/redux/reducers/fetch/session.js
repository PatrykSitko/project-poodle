import {
  ESTABLISHING_SESSION,
  SESSION_ESTABLISHED,
  FAILED_ESTABLISHING_SESSION
} from "../../actions/types";

export const initialSessionState = { token: undefined };

export default (state = initialSessionState, { type: action, payload }) => {
  switch (action) {
    default:
    case FAILED_ESTABLISHING_SESSION:
    case ESTABLISHING_SESSION:
      return state;
    case SESSION_ESTABLISHED:
      return { ...state, ...payload };
  }
};
