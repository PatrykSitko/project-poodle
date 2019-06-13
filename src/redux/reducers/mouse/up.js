import { MOUSE_UP } from "../../actions/types";

export const initialMouseUpState = { value: undefined };

export default (state = initialMouseUpState, { type: action, payload }) =>
  action === MOUSE_UP ? { ...state, ...payload } : state;
