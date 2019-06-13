import { MOUSE_DOWN } from "../../../actions/types";

export const initialMousePressedState = { value: undefined };

export default (
  state = initialMousePressedState,
  { type: action, payload }
) => {
  switch (action) {
    default:
      return state;
    case MOUSE_DOWN:
      return { ...state, ...payload };
  }
};
