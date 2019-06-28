import React, { useEffect, useState } from "react";
import fetchGroupData from "../../../redux/actions/fetch/instructor/group";
import Logout from "../../button/logout";
import Button from "../../button";
import Group from "../../group";
import Member from "../../group/member";
import Exam from "./exam";
import { connect } from "react-redux";
import "./display.css";

const mapStateToProps = ({ group }) => {
  return {
    group
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchGroupData: location => {
      dispatch(fetchGroupData(location));
    }
  };
};
export function Display(
  location,
  setVisible,
  isVisible,
  displayOpacity,
  { group, fetchGroupData }
) {
  useEffect(() => {
    if (isVisible && displayOpacity >= 1) {
      fetchGroupData(location);
    }
  }, [location, isVisible, displayOpacity]);
  const [previousEventHandler, setPreviousEventHandler] = useState(undefined);
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const currentEventHandler = event => {
      if (event && event.key === "Escape") {
        setVisible(false);
      }
    };
    if (displayOpacity > 1 && group && group.examList) {
      const exams = group.examList;
      setMembers([
        exams.map(
          (
            {
              examDate: date,
              examTitle: title,
              examMaxGrade: maxGrade,
              examWeight: weight
            },
            index
          ) => (
            <Member key={index}>
              <Exam {...{ date, title, maxGrade, weight }} />
            </Member>
          )
        )
      ]);
    } else if (members !== []) {
      setMembers([]);
    }
    if (displayOpacity > 1 && window.onkeydown !== currentEventHandler) {
      setPreviousEventHandler(window.onkeydown);
      window.onkeydown = currentEventHandler;
    } else if (
      displayOpacity <= 0.3 &&
      window.onkeydown !== previousEventHandler
    ) {
      window.onkeydown = previousEventHandler;
      setPreviousEventHandler(undefined);
    }
  }, [group, isVisible, setVisible, previousEventHandler, displayOpacity]);
  return (
    <div className="display-container">
      <Logout absolute />
      <div className="display-content">
        <Group columns={2} className="display-bar" hidden={displayOpacity <= 1}>
          <Member style={{ width: "calc(100% - 86px)" }}>
            <div className="display-title">{group && group.groupName}</div>
          </Member>
          <Member style={{ width: "86px" }}>
            <Button className="new-exam-button">+</Button>
          </Member>
        </Group>
        <Group className="exams-list" hidden={displayOpacity <= 1}>
          {members}
        </Group>
      </div>
      <Button className="close-display-button" onClick={e => setVisible(false)}>
        Close
      </Button>
    </div>
  );
}

export default location => (setVisible, isVisible, displayOpacity) =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Display.bind(this, location, setVisible, isVisible, displayOpacity));
