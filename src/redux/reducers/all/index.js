import { combineReducers } from "redux";
import student from "../fetch/student";
import session from "../fetch/session";
import windowInnerWidth from "../window/inner/width";
import windowInnerHeight from "../window/inner/height";
import mousedown from "../mouse/down";
import mouseup from "../mouse/up";

export default combineReducers({
  student,
  session,
  windowInnerWidth,
  windowInnerHeight,
  mousedown,
  mouseup
});
