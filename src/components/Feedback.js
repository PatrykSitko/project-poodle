import React from "react";
import "./Feedback.css";

export default function Feedback({ children, style }) {
  return (
    <div id="feedback-container" style={style}>
      {children}
    </div>
  );
}
