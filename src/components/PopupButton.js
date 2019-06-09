import React, { useState } from "react";
import "./PopupButton.css";

export default function PopupButton({ content, children }) {
  const [clicked, setClicked] = useState(false);
  return [
    clicked && (
      <div className="popup-window">
        <div className="popup-content">{content}</div>
        <button
          className="popup-close-button"
          onClick={event => setClicked(!clicked)}
        >
          Close
        </button>
      </div>
    ),
    <button className="popup-button" onClick={event => setClicked(!clicked)}>
      {children}
    </button>
  ];
}
