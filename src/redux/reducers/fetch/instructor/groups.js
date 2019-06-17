import {
  ESTABLISHING_SESSION,
  SESSION_ESTABLISHED,
  FAILED_ESTABLISHING_SESSION,
  LOGGED_OUT
} from "../../../actions/types";

export const initialGroupsState = [];

export default (state = initialGroupsState, { type: action, payload }) => {
  switch (action) {
    default:
    case ESTABLISHING_SESSION:
    case FAILED_ESTABLISHING_SESSION:
      return state;
    case SESSION_ESTABLISHED:
    case LOGGED_OUT:
      return { ...state, ...payload };
  }
};
