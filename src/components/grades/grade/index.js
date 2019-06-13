//@ts-nocheck
import React from "react";
import PopupButton from "../../button/popup";
import Feedback from "../../feedback";
import "./grade.css";

export default function(props) {
  const { examTitle, feedback, popupStyle, className } = props;
  return [
    <GradeMain key={"GradeMain" + examTitle} {...props} />,
    <tr key={"feedback" + examTitle} className={"feedback " + className}>
      <td className="exam-feedback-button" colSpan={4}>
        <PopupButton
          style={popupStyle}
          key={"PopupButton" + examTitle}
          content={[
            <h1 key="title">Feedback</h1>,
            <table key="PopupButtonTable">
              <tbody>
                <GradeMain {...{ ...props, className: "popup-table-row" }} />
              </tbody>
            </table>,
            <Feedback
              key={"feedback" + examTitle}
              style={{ height: window.innerHeight - 453 }}
            >
              {feedback}
            </Feedback>
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
  className
}) {
  return [
    <tr key={"description" + examTitle} className={"description " + className}>
      <td className="grade-date">Datum</td>
      <td className="grade-title">Titel</td>
      <td className="grade-score">Score</td>
      <td className="grade-weight">Impact</td>
    </tr>,
    <tr
      id={examTitle}
      key={"grade" + examTitle}
      className={"grade " + className}
    >
      <td className="exam-date">{date}</td>
      <td className="exam-title">{examTitle}</td>
      <td className="exam-score">{gradeValue + "/" + examMaxGrade}</td>
      <td className="exam-weight">{examWeight}</td>
    </tr>
  ];
}
