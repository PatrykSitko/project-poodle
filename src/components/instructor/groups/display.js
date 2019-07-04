import React, { useEffect, useRef, useState } from "react";
import Button from "../../button";
import Logout from "../../button/logout";
import "./display.css";

export default function Display({
  logout,
  className,
  contentClassName,
  closeButtonClassName,
  setVisible,
  isVisible,
  displayOpacity,
  children
}) {
  const displayContainerRef = useRef();
  const [previousEventHandler, setPreviousEventHandler] = useState(undefined);
  useEffect(() => {
    const currentEventHandler = event => {
      if (event && event.key === "Escape") {
        setVisible(false);
      }
    };
    if (displayOpacity > 1 && window.onkeydown !== currentEventHandler) {
      setPreviousEventHandler(window.onkeydown);
      window.onkeydown = currentEventHandler;
    } else if (
      displayOpacity <= 0.3 &&
      window.onkeydown !== previousEventHandler
    ) {
      window.onkeydown = previousEventHandler;
      setPreviousEventHandler(undefined);
    }
  }, [window.onkeydown, isVisible, setVisible, displayOpacity]);
  return (
    <div className={`display-container ${className ? className : ""}`}>
      {logout &&
        (typeof logout === "string" && logout.match("absolute") ? (
          <Logout absolute />
        ) : (
          <Logout />
        ))}
      <div
        onClick={e =>
          e.target === displayContainerRef.current && setVisible(false)
        }
        className={`display-content ${
          contentClassName ? contentClassName : ""
        }`}
      >
        {displayOpacity > 1 && children}
      </div>
      <Button
        className={`close-display-button ${
          closeButtonClassName ? closeButtonClassName : ""
        }`}
        onClick={e => setVisible(false)}
      >
        Close
      </Button>
    </div>
  );
}
