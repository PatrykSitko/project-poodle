import React, { useState } from "react";
import "./PopupButton.css";
export default function PopupButton({ style, content, children }) {
  const [clicked, setClicked] = useState(false);
  const [popupCloseButtonClassName, setPopupCloseButtonClassName] = useState(
    ""
  );
  const [popupButtonClassName, setPopupButtonClassName] = useState("");
  return [
    clicked && (
      <div className="popup-window" key="popup-window" style={style}>
        <div className="popup-content">{content}</div>
        <h3
          className={"popup-close-button " + popupCloseButtonClassName}
          onMouseDown={event => {
            setPopupCloseButtonClassName("popup-close-button-mousedown");
          }}
          onMouseUp={event => {
            setClicked(!clicked);
            setPopupCloseButtonClassName("");
          }}
        >
          Close
        </h3>
      </div>
    ),
    <button
      className={"popup-button " + popupButtonClassName}
      key="popup-button"
      onMouseDown={__ => setPopupButtonClassName("popup-button-mousedown")}
      onMouseUp={__ => {
        setClicked(!clicked);
        setPopupButtonClassName("");
      }}
    >
      {children}
    </button>
  ];
}
