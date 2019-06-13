import { WINDOW_INNER_HEIGHT_CHANGED } from "../../../../actions/types";

export const initialWindowInnerHeightState = { value: window.innerHeight };

export default (
  state = initialWindowInnerHeightState,
  { type: action, payload }
) => {
  switch (action) {
    default:
      return state;
    case WINDOW_INNER_HEIGHT_CHANGED:
      return { ...state, ...payload };
  }
};
