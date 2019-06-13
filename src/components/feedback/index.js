import React from "react";
import "./feedback.css";

export default function({ children, style }) {
  return (
    <div id="feedback-container" style={style}>
      {children}
    </div>
  );
}
