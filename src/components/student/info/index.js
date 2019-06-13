import React from "react";
import { connect } from "react-redux";
import "./info.css";

export function UserInfo({ firstName, lastName, nationalNumber, imageURL }) {
  return (
    <div id="user-info-panel">
      <div id="user-info">
        <span id="user-info-left">
          <p id="first-name-label">naam:</p>
          <p id="last-name-label">famillienaam:</p>
          <p id="national-number-label">nationale nummer:</p>
        </span>
        <span id="user-info-right">
          <p id="first-name">{firstName}</p>
          <p id="last-name">{lastName}</p>
          <p id="national-number">{nationalNumber}</p>
        </span>
      </div>
      <div id="user-image-frame">
        <img id="user-image" src={imageURL} alt={firstName + " " + lastName} />
      </div>
    </div>
  );
}

function props({ student: { firstName, lastName, nationalNumber, imageURL } }) {
  return { firstName, lastName, nationalNumber, imageURL };
}

export default connect(props)(UserInfo);
