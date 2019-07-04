import React, { useRef, useEffect, useState } from "react";
import P from "../p";
import Input from ".";
import "./box.css";

export default function InputBox({
  disabled,
  heightDividedBy,
  title,
  inputType,
  inputDefaultValue,
  hidden,
  noBreak,
  className,
  ...props
}) {
  const ref = useRef();
  const [updateMode, setUpdateMode] = useState(false);
  const [elementFocused, setElementFocused] = useState(false);
  useEffect(() => {
    focusOnInputOf(ref.current);
  }, [ref, updateMode]);
  return (
    <div
      {...props}
      ref={ref}
      className={`dynamic-input-box ${className ? className : ""}`}
      hidden={hidden}
      onClick={focusOrClose.bind(
        this,
        setElementFocused,
        elementFocused,
        setUpdateMode,
        updateMode,
        ref
      )("dynamic-input-box")}
      onMouseEnter={e => {
        if (updateMode) {
          setElementFocused(true);
          focusOnInputOf(ref.current);
        }
      }}
    >
      {title && (
        <div
          style={{
            width: noBreak ? "50%" : "100%",
            display: "inline-block"
          }}
          className="dynamic-box-left"
          onClick={focusOrClose.bind(
            this,
            setElementFocused,
            elementFocused,
            setUpdateMode,
            updateMode,
            ref
          )("dynamic-box-left")}
        >
          <P
            onClick={focusOrClose.bind(
              this,
              setElementFocused,
              elementFocused,
              setUpdateMode,
              updateMode,
              ref
            )("p")}
            heightDividedBy={heightDividedBy}
          >
            {title}
          </P>
        </div>
      )}
      <div
        style={{
          width: noBreak && title ? "50%" : "100%",
          display: "inline-block"
        }}
        className="dynamic-box-right"
        onClick={focusOrClose.bind(
          this,
          setElementFocused,
          elementFocused,
          setUpdateMode,
          updateMode,
          ref
        )("dynamic-box-right")}
      >
        {!disabled && (
          <Input
            useReference={ref}
            hidden={!updateMode}
            type={inputType}
            defaultValue={inputDefaultValue}
            heightDividedBy={heightDividedBy}
          />
        )}
        <P
          hidden={updateMode}
          onClick={focusOrClose.bind(
            this,
            setElementFocused,
            elementFocused,
            setUpdateMode,
            updateMode,
            ref
          )("p")}
          heightDividedBy={heightDividedBy}
        >
          {inputDefaultValue}
        </P>
      </div>
    </div>
  );
}
// onClick={e => {
//   if (e.target.className.includes("p")) {
//     if (isFocusedInputOf(e.target)) {
//       setUpdateMode(!updateMode);
//     }
//     focusOnInputOf(e.target);
//   }
// }}
function focusOrClose(
  setElementFocused,
  elementFocused,
  setUpdateMode,
  updateMode,
  ref,
  className
) {
  return e => {
    if (e.target.className.includes(className)) {
      if (!updateMode) {
        setElementFocused(true);
        setUpdateMode(!updateMode);
      } else if (elementFocused) {
        setUpdateMode(!updateMode);
      } else {
        focusOnInputOf(ref.current);
        setElementFocused(true);
      }
    }
  };
}
function isFocusedInputOf(target) {
  let active = false;
  if (target.children) {
    try {
      for (let boxChild of target.children) {
        if (
          boxChild.className &&
          boxChild.className.includes("dynamic-input")
        ) {
          active = boxChild.activeElement;
        }
      }
      if (active) {
        return active;
      } else {
        throw new Error();
      }
    } catch (error) {
      for (let boxChild of target.children) {
        if (boxChild.children) {
          active = isFocusedInputOf(boxChild);
        }
        if (active) {
          return active;
        }
      }
      return active;
    }
  }
}
function focusOnInputOf(target) {
  if (target.children) {
    try {
      for (let boxChild of target.children) {
        if (
          boxChild.className &&
          boxChild.className.includes("dynamic-input")
        ) {
          boxChild.focus();
          return true;
        }
      }
      throw new Error();
    } catch (error) {
      let succeed = false;
      for (let boxChild of target.children) {
        if (boxChild.children) {
          succeed = focusOnInputOf(boxChild);
          if (succeed) {
            return succeed;
          }
        }
      }
      return succeed;
    }
  }
}
