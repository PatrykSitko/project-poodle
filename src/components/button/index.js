import React, { useRef, useState, useEffect } from "react";
import { push } from "redux-first-routing";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import "./button.css";

const mapDispatchToProps = dispatch => {
  return {
    push: go => event => dispatch(push(go))
  };
};
export const Button = ({
  push,
  go,
  children,
  className,
  style,
  textStyle,
  lineHeight = "50%",
  onClick,
  ...other
}) => {
  const button = useRef();
  const [height, setHeight] = useState(1);
  useEffect(() => {
    if (button) {
      const buttonHeight = ReactDOM.findDOMNode(
        button.current
      ).getBoundingClientRect().height;
      if (height !== buttonHeight) {
        setHeight(buttonHeight);
      }
    }
  }, [button, height]);
  let fontStyle = {};
  if (textStyle) {
    console.log(textStyle);
    if (textStyle.center) {
      fontStyle.float = "none";
      fontStyle.marginLeft = "auto";
      fontStyle.marginRight = "auto";
    }
    if (textStyle.fontSize && textStyle.fontSize === "auto") {
      fontStyle.fontSize = height / 2;
      fontStyle.lineHeight = height / 2 - fontStyle.fontSize;
    }
  }
  const childrenClassName =
    typeof children === "string" ? "button-children-string" : "button-children";
  return (
    <div
      {...other}
      ref={button}
      onClick={go ? push(go) : onClick}
      className={`button ${className ? " " + className : ""}`}
      style={{ ...style }}
    >
      <p className={childrenClassName} style={{ ...textStyle, ...fontStyle }}>
        {children}
      </p>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Button);
