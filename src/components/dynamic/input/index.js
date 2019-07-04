import React, { useRef, useEffect, useState } from "react";
import { calcHeight } from "../helpers";
import "./input.css";

export default function Input({
  useReference,
  hidden,
  heightDividedBy,
  className,
  style = {},
  ...props
}) {
  const ref = useRef();
  const [height, setHeight] = useState(undefined);
  useEffect(() => {
    const newHeight = calcHeight(
      useReference ? useReference : ref,
      heightDividedBy
    );
    if (newHeight && height !== newHeight) {
      setHeight(newHeight);
    }
  }, [hidden, ref, useReference, heightDividedBy, height]);
  return (
    <input
      hidden={hidden}
      ref={ref}
      className={`dynamic-input ${className ? className : ""}`}
      {...props}
      style={{
        fontSize: height,
        ...style
      }}
    />
  );
}
