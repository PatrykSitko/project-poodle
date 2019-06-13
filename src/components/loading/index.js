import React from "react";
import loading from "../../images/loading.gif";

export default function(props) {
  return (
    <img
      src={loading}
      alt="loading..."
      {...props}
      className={`${props.className ? props.className : ""} loading`}
    />
  );
}
