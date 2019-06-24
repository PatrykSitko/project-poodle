import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./filter.css";

export default ({
  className,
  keys,
  setKeys,
  toLowerCase,
  toUpperCase,
  ...other
}) => {
  const inputRef = useRef();
  return (
    <input
      ref={inputRef}
      {...other}
      className={`filter ${className ? className : ""}`}
      onChange={event => {
        let inputValue = ReactDOM.findDOMNode(
          inputRef.current
        )._valueTracker.getValue();
        if (toLowerCase && inputValue.toLowerCase) {
          inputValue = inputValue.toLowerCase();
        }
        if (toUpperCase && inputValue.toUpperCase) {
          inputValue = inputValue.toUpperCase();
        }
        if (typeof inputValue === "string") {
          switch (inputValue) {
            default:
              setKeys(inputValue.split(""));
              break;
            case "backspace":
              setKeys(keys.slice(0, keys.length - 1));
              break;
            case "capslock":
            case "shift":
            case "control":
            case "alt":
            case "altgraph":
            case "meta":
              break;
          }
        }
      }}
    />
  );
};
