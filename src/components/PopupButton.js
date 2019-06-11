import React, { useState } from "react";
import "./PopupButton.css";
export default function PopupButton({ style, content, children }) {
  const [clicked, setClicked] = useState(false);
  const [popupCloseButtonClassName, setPopupCloseButtonClassName] = useState(
    ""
  );
  const [
    popupCloseButton_mouseIsDown,
    setMouseIsDown_popupCloseButton
  ] = useState(false);
  const [popupButtonClassName, setPopupButtonClassName] = useState("");
  const [popupButton_mouseIsDown, setMouseIsDown_popupButton] = useState(false);
  return [
    clicked && (
      <div className="popup-window" key="popup-window" style={style}>
        <div className="popup-content">{content}</div>
        <h3
          className={"popup-close-button " + popupCloseButtonClassName}
          onMouseDown={event => {
            setMouseIsDown_popupCloseButton(true);
            setPopupCloseButtonClassName("popup-close-button-mousedown");
          }}
          onMouseUp={event => {
            setMouseIsDown_popupCloseButton(false);
            setPopupCloseButtonClassName("");
            setClicked(!clicked);
          }}
          onMouseLeave={__ => setPopupCloseButtonClassName("")}
          onMouseEnter={__ =>
            popupCloseButton_mouseIsDown &&
            setPopupCloseButtonClassName("popup-close-button-mousedown")
          }
        >
          Close
        </h3>
      </div>
    ),
    <button
      className={"popup-button " + popupButtonClassName}
      key="popup-button"
      onMouseDown={__ => {
        setMouseIsDown_popupButton(true);
        setPopupButtonClassName("popup-button-mousedown");
      }}
      onMouseUp={__ => {
        setMouseIsDown_popupButton(false);
        setPopupButtonClassName("");
        setClicked(!clicked);
      }}
      onMouseLeave={__ => setPopupButtonClassName("")}
      onMouseEnter={__ =>
        popupButton_mouseIsDown &&
        setPopupButtonClassName("popup-button-mousedown")
      }
    >
      {children}
    </button>
  ];
}
