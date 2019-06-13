import { WINDOW_INNER_WIDTH_CHANGED } from "../../../../actions/types";

export const initialWindowInnerWidthState = { value: window.innerWidth };

export default (
  state = initialWindowInnerWidthState,
  { type: action, payload }
) => {
  switch (action) {
    default:
      return state;
    case WINDOW_INNER_WIDTH_CHANGED:
      return { ...state, ...payload };
  }
};
