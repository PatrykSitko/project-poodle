import { WINDOW_INNER_WIDTH_CHANGED } from "../../../actions/types";

export const initialWindowInnerWidthState = { value: window.innerWidth };

export default (
  state = initialWindowInnerWidthState,
  { type: action, payload }
) => (action === WINDOW_INNER_WIDTH_CHANGED ? { ...state, ...payload } : state);
