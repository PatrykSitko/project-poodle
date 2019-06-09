import React, { Component } from "react";
import { setToken, setUrl, setUserData } from "../redux/actions";
import { connect } from "react-redux";
import Student from "./views/Student";

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
      return <p>Loading...</p>;
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
