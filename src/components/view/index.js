import React, { useEffect } from "react";
import updateSessionState from "../../redux/actions/fetch/session";
import { initialSessionState } from "../../redux/reducers/fetch/session";
import updateStudentState from "../../redux/actions/fetch/student";
import { connect } from "react-redux";
import Student from "./student";
import Loading from "../loading/screen";

export function ViewLoader({
  token,
  student,
  url,
  updateSessionState,
  updateStudentState
}) {
  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token })
    })
      .then(res => res.json())
      .then(data => {
        updateStudentState(data);
      });
  }, [url, token, updateStudentState]);
  if (url.includes("student/") && !student) {
    return <Loading />;
  }
  if (url.includes("student/")) {
    return Student;
  } else if (url.includes("teacher/")) {
    return null;
  } else if (url.includes("admin/")) {
    return null;
  } else {
    updateSessionState(initialSessionState.token, initialSessionState.url);
    return false;
  }
}

const props = ({ session: { token, url }, student }) => {
  return { token, url, student };
};

const dispatch = dispatch => {
  return {
    updateSessionState: (token, url) =>
      dispatch(updateSessionState(token, url)),
    updateStudentState: student => dispatch(updateStudentState(student))
  };
};

export default connect(
  props,
  dispatch
)(ViewLoader);
