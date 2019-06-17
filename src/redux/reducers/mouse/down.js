import { MOUSE_DOWN, MOUSE_UP } from "../../actions/types";

export const initialMouseDownState = { value: undefined };

export default (state = initialMouseDownState, { type: action, payload }) =>
  action === MOUSE_DOWN || action === MOUSE_UP
    ? { ...state, ...payload }
    : state;
