import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { calcHeight } from "../../helpers";
import "./key.css";

export default ({
  getHeight,
  hidden,
  heightDividedBy,
  className,
  style = {},
  keys,
  setKeys,
  toLowerCase,
  toUpperCase,
  ...props
}) => {
  const ref = useRef();
  const [height, setHeight] = useState(undefined);
  useEffect(() => {
    const newHeight = calcHeight(ref, heightDividedBy);
    if (newHeight && height !== newHeight) {
      setHeight(newHeight);
      getHeight(newHeight);
    }
  }, [hidden, ref, getHeight, heightDividedBy, height]);
  return (
    <input
      ref={ref}
      {...props}
      style={{
        fontSize: height,
        ...style
      }}
      className={`dynamic-input-filter-key ${className ? className : ""}`}
      onChange={event => {
        console.log(keys, setKeys);
        let inputValue = ReactDOM.findDOMNode(
          ref.current
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
