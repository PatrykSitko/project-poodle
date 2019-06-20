import React from "react";
import Button from "../";
import "../image/image.css";
import exitHover from "../../../images/exit-hover.png";

export default ({
  image = exitHover,
  children,
  className,
  style,
  ...other
}) => {
  return (
    <Button
      {...other}
      className={`image-button ${className ? " " + className : ""}`}
      style={{ backgroundImage: `url(${image})`, ...style }}
    >
      {children}
    </Button>
  );
};
