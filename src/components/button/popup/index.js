import React, { useState } from "react";
import { connect } from "react-redux";
import "./popup.css";

export function PopupButton({ style, content, children, mousedown }) {
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
          onMouseDown={__ =>
            setPopupCloseButtonClassName("popup-close-button-mousedown")
          }
          onMouseUp={__ => {
            setPopupCloseButtonClassName("");
            setClicked(!clicked);
          }}
          onMouseLeave={__ => setPopupCloseButtonClassName("")}
          onMouseEnter={__ =>
            mousedown &&
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
      onMouseDown={__ => setPopupButtonClassName("popup-button-mousedown")}
      onMouseUp={__ => {
        setPopupButtonClassName("");
        setClicked(!clicked);
      }}
      onMouseLeave={__ => setPopupButtonClassName("")}
      onMouseEnter={__ =>
        mousedown && setPopupButtonClassName("popup-button-mousedown")
      }
    >
      {children}
    </button>
  ];
}

const mapStateToProps = ({ mousedown: { value } }) => {
  return { mousedown: value };
};

export default connect(mapStateToProps)(PopupButton);
