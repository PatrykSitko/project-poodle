import { WINDOW_INNER_HEIGHT_CHANGED } from "../../../actions/types";

export const initialWindowInnerHeightState = { value: window.innerHeight };

export default (
  state = initialWindowInnerHeightState,
  { type: action, payload }
) =>
  action === WINDOW_INNER_HEIGHT_CHANGED ? { ...state, ...payload } : state;
