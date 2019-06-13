import React, { useState } from "react";
import { connect } from "react-redux";
import updateSessionState from "../../../redux/actions/fetch/session";
import { initialSessionState } from "../../../redux/reducers/fetch/session";
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

const dispatch = dispatch => {
  return {
    logout: () => {
      dispatch(
        updateSessionState(initialSessionState.token, initialSessionState.url)
      );
    }
  };
};

export default connect(
  null,
  dispatch
)(Logout);
