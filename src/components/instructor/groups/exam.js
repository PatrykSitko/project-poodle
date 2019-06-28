import React, { useRef, useEffect, useState } from "react";
import Group from "../../group";
import Member from "../../group/member";
import ReactDOM from "react-dom";
import "./exam.css";

export default ({ date, title, maxGrade, weight }) => {
  return (
    <Group globalStyle={{ width: "100%", overflow: "hidden" }}>
      <Member>
        <Box
          title="Date"
          inputType="date"
          inputDefaultValue={date}
          inputClassName="instructor-exam-date-input"
        />
        <Box title="title" inputType="text" inputDefaultValue={title} />
        <Box
          title="Max. Grade"
          inputType="number"
          inputDefaultValue={maxGrade}
        />
        <Box
          title="Weight"
          inputType="number"
          inputDefaultValue={weight}
          className="instructor-exam-weight"
        />
      </Member>
    </Group>
  );
};
const Box = ({
  title,
  inputType,
  inputDefaultValue,
  hidden,
  className,
  inputClassName
}) => {
  const [ref, inputRef] = [useRef(), useRef()];
  const [height, setHeight] = useState(0);
  const [updateMode, setUpdateMode] = useState(false);
  useEffect(() => {
    if (ref.current) {
      const newHeight =
        ReactDOM.findDOMNode(ref.current).getBoundingClientRect().width / 9;
      if (height !== newHeight) {
        setHeight(newHeight);
      }
    }
  }, [ref, height]);
  return (
    <div
      ref={ref}
      onClick={e => {
        if (
          (!inputRef || e.target !== inputRef.current) &&
          typeof setUpdateMode === "function"
        ) {
          setUpdateMode(!updateMode);
        }
      }}
      className={`instructor-exam ${className ? className : ""}`}
      hidden={hidden}
    >
      <p style={{ fontSize: height - 1, padding: 0 }}>
        {title ? [title + ":", <br />] : ""}
        <input
          ref={inputRef}
          hidden={!updateMode}
          type={inputType}
          className={`instructor-exam-input ${
            inputClassName ? inputClassName : ""
          }`}
          style={{
            fontSize: height
          }}
          defaultValue={inputDefaultValue}
        />
        {updateMode ? "" : inputDefaultValue}
      </p>
    </div>
  );
};
