import React, { Component } from "react";
import { setToken, setUrl, setUserData } from "../redux/actions";
import { connect } from "react-redux";
import Student from "./views/Student";
import loading from "../images/loading.gif";

function mapStateToProps({ token, url, userData }) {
  return { token, url, userData };
}
function mapDispatchToProps(dispatch) {
  return {
    setToken: token => dispatch(setToken(token)),
    setUrl: url => dispatch(setUrl(url)),
    setUserData: data => dispatch(setUserData(data))
  };
}
export class ViewLoader extends Component {
  componentDidMount() {
    const { token, url, setUserData } = this.props;
    fetch(`/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUserData(data);
      });
  }
  render() {
    const { userData, url, setToken, setUrl, setUserData } = this.props;
    if (!userData) {
      return (
        <img
          src={loading}
          alt="loading..."
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain"
          }}
        />
      );
    }
    if (url.includes("admin/")) {
      return null;
    } else if (url.includes("teacher/")) {
      return null;
    } else if (url.includes("student/")) {
      return <Student />;
    } else {
      setToken(undefined);
      setUrl(undefined);
      setUserData(undefined);
      return false;
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewLoader);
