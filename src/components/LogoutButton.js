import React, { useState } from "react";
import { connect } from "react-redux";
import { setUrl, setData, setToken } from "../redux/actions";
import exit from "../images/exit.png";
import exitHover from "../images/exit-hover.png";
import "./LogoutButton.css";

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(setUrl(undefined));
      dispatch(setData(undefined));
      dispatch(setToken(undefined));
    }
  };
};
export function LogoutButton({ logout, ...props }) {
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

export default connect(
  null,
  mapDispatchToProps
)(LogoutButton);
