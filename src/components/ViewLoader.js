import React, { useEffect } from "react";
import { setToken, setUrl, setData } from "../redux/actions";
import { connect } from "react-redux";
import Student from "./views/Student";
import Loading from "./LoadingScreen";

function mapStateToProps({ token, url, data }) {
  return { token, url, data };
}
function mapDispatchToProps(dispatch) {
  return {
    setToken: token => dispatch(setToken(token)),
    setUrl: url => dispatch(setUrl(url)),
    setData: data => dispatch(setData(data))
  };
}
export function ViewLoader({ token, data, url, setToken, setUrl, setData }) {
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
        setData(data);
      });
  }, [url, token, setData]);
  if (!data) {
    return <Loading />;
  }
  if (url.includes("student/")) {
    return Student;
  } else if (url.includes("teacher/")) {
    return null;
  } else if (url.includes("admin/")) {
    return null;
  } else {
    setToken(undefined);
    setUrl(undefined);
    setData(undefined);
    return false;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewLoader);
