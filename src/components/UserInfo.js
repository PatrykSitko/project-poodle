import React from "react";
import { connect } from "react-redux";
import "./UserInfo.css";

function mapStateToProps({
  userData: { firstname, lastname, nationalNumber, imageURL }
}) {
  return { firstname, lastname, nationalNumber, imageURL };
}

export function UserInfo({ firstname, lastname, nationalNumber, imageURL }) {
  return (
    <div id="user-info-panel">
      <div id="user-info">
        <span id="user-info-left">
          <p id="firstname-label">naam:</p>
          <p id="lastname-label">famillienaam:</p>
          <p id="national-number-label">nationale nummer:</p>
        </span>
        <span id="user-info-right">
          <p id="firstname">{firstname}</p>
          <p id="lastname">{lastname}</p>
          <p id="national-number">{nationalNumber}</p>
        </span>
      </div>
      <div id="user-image-frame">
        <img id="user-image" src={imageURL} alt={firstname + " " + lastname} />
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(UserInfo);
