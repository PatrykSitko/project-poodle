import React, { useState } from "react";
import { connect } from "react-redux";
import { updateSession } from "../../../redux/actions/fetch/session";
import { initialSessionState } from "../../../redux/reducers/fetch/session";
import { push } from "redux-first-routing";
import exit from "../../../images/exit.png";
import exitHover from "../../../images/exit-hover.png";
import "./logout.css";

export function Logout({ logout, ...props }) {
  const [image, setImage] = useState(exit);
  return (
    <img
      className="logout-button"
      src={image}
      alt={"Logout"}
      onMouseEnter={() => setImage(exitHover)}
      onMouseLeave={() => setImage(exit)}
      onClick={logout}
      {...props}
    />
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(push("/"));
      dispatch(updateSession(initialSessionState.token));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);
