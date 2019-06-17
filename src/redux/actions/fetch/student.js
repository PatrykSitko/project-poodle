import { FETCHED_STUDENT_DATA } from "../types";

export function setStudent(student) {
  return {
    type: FETCHED_STUDENT_DATA,
    payload: { ...student }
  };
}

export default () =>
  async function(dispatch, getState) {
    console.log(dispatch, getState);
    const url = await getState().router.pathname;
    const token = await getState().session.token;
    console.log(url, token);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token })
    });
    const data = await response.json();
    console.log(data);
    dispatch(setStudent(data));
  };