import { MOUSE_DOWN, MOUSE_UP } from "../types";

export default pressed => {
  return pressed
    ? { type: MOUSE_DOWN, payload: { value: pressed } }
    : { type: MOUSE_UP, payload: { value: pressed } };
};
