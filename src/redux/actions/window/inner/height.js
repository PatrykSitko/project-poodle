import { WINDOW_INNER_HEIGHT_CHANGED } from "../../types";

export default height => {
  return {
    type: WINDOW_INNER_HEIGHT_CHANGED,
    payload: { value: height }
  };
};
