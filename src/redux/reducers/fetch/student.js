import { FETCHED_STUDENT_DATA } from "../../actions/types";

export const initialStudentState = {};

export default (state = initialStudentState, { type: action, payload }) =>
  action === FETCHED_STUDENT_DATA ? { ...state, ...payload } : state;
