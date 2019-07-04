import React, { useRef, useState, useEffect } from "react";
import { push } from "redux-first-routing";
import P from "../dynamic/p";
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
  childrenClassName,
  style,
  dynamic,
  Display,
  onClick,
  ...other
}) => {
  const button = useRef();
  const displayerRef = useRef();
  const [height, setHeight] = useState(1);
  const [showDisplay, setShowDisplay] = useState(false);
  const [displayHidden, setDisplayHidden] = useState(true);
  const [displayerOpacity, setDisplayerOpacity] = useState(0);
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
  childrenClassName =
    typeof children === "string"
      ? `button-children-string ${childrenClassName ? childrenClassName : ""}`
      : `button-children ${childrenClassName ? childrenClassName : ""}`;
  let Displayer = () => "";
  useEffect(() => {
    if (showDisplay && displayerOpacity <= 1) {
      const timeout = setTimeout(() => {
        setDisplayHidden(false);
        setDisplayerOpacity(displayerOpacity + 0.1);
        clearTimeout(timeout);
      }, 27);
    }
    if (!showDisplay && displayerOpacity >= 0) {
      const timeout = setTimeout(() => {
        setDisplayerOpacity(displayerOpacity - 0.1);
        if (displayerOpacity < 0.1) {
          setDisplayHidden(true);
        }
        clearTimeout(timeout);
      }, 17);
    }
  }, [showDisplay, displayerOpacity, setDisplayerOpacity]);
  if (typeof Display === "function") {
    Displayer = Display(
      setShowDisplay,
      showDisplay ? !displayHidden : showDisplay,
      displayerOpacity
    );
  }
  return [
    Display && !displayHidden && (
      <div
        key="displayer"
        ref={displayerRef}
        style={{ opacity: displayerOpacity }}
        className="displayer"
        onClick={e => {
          if (e.target === displayerRef.current) {
            setShowDisplay(false);
          }
        }}
      >
        <Displayer />
      </div>
    ),
    <div
      key="button"
      {...other}
      ref={button}
      onMouseUp={() => {
        if (Display) {
          setShowDisplay(!showDisplay);
        }
      }}
      onClick={go ? push(go) : onClick}
      className={`button ${className ? " " + className : ""}`}
      style={{ ...style }}
    >
      {dynamic ? (
        <P className={childrenClassName}>{children}</P>
      ) : (
        <p className={childrenClassName}>{children}</p>
      )}
    </div>
  ];
};

export default connect(
  null,
  mapDispatchToProps
)(Button);
