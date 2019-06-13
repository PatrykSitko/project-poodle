import { WINDOW_INNER_WIDTH_CHANGED } from "../../../types";

export default width => {
  return {
    type: WINDOW_INNER_WIDTH_CHANGED,
    payload: { value: width }
  };
};
