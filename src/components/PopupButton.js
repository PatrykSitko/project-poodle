import React, { useState } from "react";
import "./PopupButton.css";
export default function PopupButton({ style, content, children }) {
  const [clicked, setClicked] = useState(false);
  return [
    clicked && (
      <div className="popup-window" key="popup-window" style={style}>
        <div className="popup-content">{content}</div>
        <h3
          className="popup-close-button"
          onClick={event => setClicked(!clicked)}
        >
          Close
        </h3>
      </div>
    ),
    <button
      className="popup-button"
      key="popup-button"
      onClick={event => setClicked(!clicked)}
    >
      {children}
    </button>
  ];
}
