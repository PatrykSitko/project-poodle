import React from "react";
import PopupButton from "./PopupButton";
import "./Grade.css";

// style={{
//   border: "3px solid black",
//   width: "1%",
//   whiteSpace: "nowrap"
// }}
export default function Grade({
  date,
  gradeValue,
  feedback,
  examTitle,
  examWeight,
  examMaxGrade,
  style
}) {
  return [
    <tr className="description" style={style}>
      <td className="grades-date">Datum</td>
      <td className="grades-title">Titel</td>
      <td className="grades-score">Score</td>
      <td className="grades-weight">Impact</td>
    </tr>,
    <tr id={examTitle} className="grade" style={style}>
      <td className="exam-date">{date}</td>
      <td className="exam-title">{examTitle}</td>
      <td className="exam-score">{gradeValue + "/" + examMaxGrade}</td>
      <td className="exam-weight">{examWeight}</td>
    </tr>,
    <tr className="feedback" style={style}>
      <td className="exam-feedback" colSpan={4}>
        <PopupButton content={feedback}>Click to read feedback</PopupButton>
      </td>
    </tr>
  ];
}
