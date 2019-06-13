import { MOUSE_DOWN } from "../../actions/types";

export const initialMouseDownState = { value: undefined };

export default (state = initialMouseDownState, { type: action, payload }) =>
  action === MOUSE_DOWN ? { ...state, ...payload } : state;
