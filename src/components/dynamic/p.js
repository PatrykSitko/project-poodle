import React, { useRef, useState, useEffect } from "react";
import { calcHeight } from "./helpers";

export default function P({
  useReference,
  heightDividedBy,
  children,
  style,
  className,
  hidden,
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
  }, [hidden, ref, heightDividedBy, height]);
  const modifiedStyle = {
    fontSize: height,
    ...style
  };
  return (
    <div
      ref={ref}
      {...props}
      hidden={hidden}
      className={`p ${className ? className : ""}`}
      style={modifiedStyle}
    >
      {children}
    </div>
  );
}
