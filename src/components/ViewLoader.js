import React, { useState, useEffect } from "react";
import { setToken, setUrl, setUserData } from "../redux/actions";
import { connect } from "react-redux";
import Student from "./views/Student";

function mapStateToProps({ token, url }) {
  return { token, url };
}
function mapDispatchToProps(dispatch) {
  return {
    setToken: token => dispatch(setToken(token)),
    setUrl: url => dispatch(setUrl(url)),
    setUserData: data => dispatch(setUserData(data))
  };
}
export function ViewLoader({ token, url, setToken, setUrl, setUserData }) {
  const [status, setStatus] = useState(undefined);
  useEffect(
    function(setUserData, setStatus, token, url) {
      (async (setUserData, setStatus, token, url) => {
        console.log(setUserData, setStatus, token, url);
        const data = await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(token)
        });
        setStatus(data.status);
        if (data.status === 200) setUserData(data.json());
      })(setUserData, setStatus, token, url);
    }.bind(this, setUserData, setStatus, token, url),
    []
  );
  switch (status) {
    case undefined:
      return <p>Loading...</p>;
    case 200:
      if (url.includes("/admin/")) {
        return null;
      } else if (url.includes("/teacher/")) {
        return null;
      } else if (url.includes("/student/")) {
        return <Student />;
      } else {
        setToken(undefined);
        setUrl(undefined);
        setUserData(undefined);
        return false;
      }
    default:
      setToken(undefined);
      setUrl(undefined);
      setUserData(undefined);
      return false;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewLoader);
