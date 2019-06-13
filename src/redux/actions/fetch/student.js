import { FETCHED_STUDENT_DATA } from "../types";

export default student => {
  return {
    type: FETCHED_STUDENT_DATA,
    payload: { ...student }
  };
};
