import React from "react";
import PopupButton from "./PopupButton";
import Feedback from "./Feedback";
import "./Grade.css";

// style={{
//   border: "3px solid black",
//   width: "1%",
//   whiteSpace: "nowrap"
// }}
export default function Grade(props) {
  const { examTitle, feedback, style } = props;
  return [
    <GradeMain key={"GradeMain" + examTitle} {...props} />,
    <tr key={"feedback" + examTitle} className="feedback" style={style}>
      <td className="exam-feedback-button" colSpan={4}>
        <PopupButton
          key={"PopupButton" + examTitle}
          content={[
            <h1 key="title">Feedback</h1>,
            <table key="PopupButtonTable">
              <tbody>
                <GradeMain
                  {...{ ...props, style: { backgroundColor: "lightgray" } }}
                />
              </tbody>
            </table>,
            <Feedback key={"feedback" + examTitle}>{feedback}</Feedback>
          ]}
        >
          Click to read feedback
        </PopupButton>
      </td>
    </tr>
  ];
}

function GradeMain({
  date,
  gradeValue,
  examTitle,
  examWeight,
  examMaxGrade,
  style
}) {
  return [
    <tr key={"description" + examTitle} className="description" style={style}>
      <td className="grade-date">Datum</td>
      <td className="grade-title">Titel</td>
      <td className="grade-score">Score</td>
      <td className="grade-weight">Impact</td>
    </tr>,
    <tr
      id={examTitle}
      key={"grade" + examTitle}
      className="grade"
      style={style}
    >
      <td className="exam-date">{date}</td>
      <td className="exam-title">{examTitle}</td>
      <td className="exam-score">{gradeValue + "/" + examMaxGrade}</td>
      <td className="exam-weight">{examWeight}</td>
    </tr>
  ];
}
