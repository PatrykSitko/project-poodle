import React, { useRef, useEffect, useState } from "react";
import P from "../../dynamic/p";
import Group from "../../group";
import Member from "../../group/member";
import Button from "../../button";
import Box from "../../dynamic/input/box";
import "./exam.css";

export default ({ date, title, maxGrade, weight, Display }) => {
  return (
    <Group
      style={{ borderBottom: "3px solid black", marginBottom: "10px" }}
      globalStyle={{ width: "100%", overflow: "hidden" }}
    >
      <Member>
        <Group columns={2}>
          <Member
            style={{
              width: "70%"
            }}
          >
            <Box
              style={{
                marginTop: "1.5%",
                paddingTop: "1%",
                marginLeft: "1.5%",
                paddingLeft: "1%",
                borderLeft: "3px solid black",
                borderTopLeftRadius: 25
              }}
              noBreak
              inputType="text"
              inputDefaultValue={title}
              heightDividedBy={3}
              className="instructor-exam-title"
            />
          </Member>
          <Member style={{ width: "30%", marginLeft: "-1%" }}>
            <div
              style={{
                width: "100%"
              }}
            >
              <Button
                className="instructor-exam-students-button"
                dynamic
                Display={Display}
              >
                Studenten
              </Button>
            </div>
          </Member>
        </Group>
      </Member>
      <Member>
        <Box
          title="Date"
          inputType="date"
          inputDefaultValue={date}
          className="instructor-exam-date"
        />
        <Box
          title="Max. Grade"
          inputType="number"
          inputDefaultValue={maxGrade}
          className="instructor-exam-max-grade"
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
// const Box = ({
//   disabled,
//   heightDividedBy,
//   title,
//   inputType,
//   inputDefaultValue,
//   hidden,
//   className,
//   inputClassName
// }) => {
//   const [ref, inputRef] = [useRef(), useRef()];
//   const [height, setHeight] = useState(0);
//   const [updateMode, setUpdateMode] = useState(false);
//   useEffect(() => {
//     if (ref.current) {
//       const newHeight =
//         ReactDOM.findDOMNode(ref.current).getBoundingClientRect().width / 9;
//       if (height !== newHeight) {
//         heightDividedBy = heightDividedBy === 0 ? 1 : heightDividedBy;
//         if (heightDividedBy < 1) {
//           setHeight(newHeight * -heightDividedBy);
//         } else {
//           setHeight(newHeight / heightDividedBy);
//         }
//       }
//     }
//   }, [ref, heightDividedBy, height]);
//   return (
//     <div
//       ref={ref}
//       onClick={e => {
//         if (
//           !disabled &&
//           (!inputRef || e.target !== inputRef.current) &&
//           typeof setUpdateMode === "function"
//         ) {
//           setUpdateMode(!updateMode);
//         }
//       }}
//       className={`instructor-exam ${className ? className : ""}`}
//       hidden={hidden}
//     >
//       <p style={{ fontSize: height - 1, padding: 0 }}>
//         {title ? [title, <br />] : ""}
//         {!disabled && (
//           <input
//             ref={inputRef}
//             hidden={!updateMode}
//             type={inputType}
//             className={`instructor-exam-input ${
//               inputClassName ? inputClassName : ""
//             }`}
//             style={{
//               fontSize: height
//             }}
//             defaultValue={inputDefaultValue}
//           />
//         )}
//         {updateMode ? "" : inputDefaultValue}
//       </p>
//     </div>
//   );
// };
