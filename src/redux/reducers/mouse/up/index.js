import { MOUSE_UP } from "../../../actions/types";

export const initialMouseReleasedState = { value: undefined };

export default (
  state = initialMouseReleasedState,
  { type: action, payload }
) => {
  switch (action) {
    default:
      return state;
    case MOUSE_UP:
      return { ...state, ...payload };
  }
};
