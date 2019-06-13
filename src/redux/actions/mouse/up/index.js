import { MOUSE_UP } from "../../types";

export default released => {
  return { type: MOUSE_UP, payload: { value: released } };
};
