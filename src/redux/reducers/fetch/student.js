import { FETCHED_STUDENT_DATA } from "../../actions/types";

export const initialStudentState = {};

export default (state = initialStudentState, { type: action, payload }) => {
  switch (action) {
    default:
      return state;
    case FETCHED_STUDENT_DATA:
      return { ...state, ...payload };
  }
};
