import { MOUSE_DOWN } from "../../types";

export default pressed => {
  return { type: MOUSE_DOWN, payload: { value: pressed } };
};
