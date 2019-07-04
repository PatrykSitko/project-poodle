import React, { useEffect, useState, useRef } from "react";
import fetchGroupData from "../../../redux/actions/fetch/instructor/group";
import students from "../../instructor/groups/students";
import Button from "../../button";
import Filter from "../../dynamic/input/filter/key";
import Group from "../../group";
import Member from "../../group/member";
import Exam from "./exam";
import Display from "./display";
import { connect } from "react-redux";

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
export function Exams(
  location,
  setVisible,
  isVisible,
  displayOpacity,
  { group, fetchGroupData }
) {
  const [keys, setKeys] = useState([]);
  const [height, setHeight] = useState(0);
  const [members, setMembers] = useState([]);
  useEffect(() => {
    if (isVisible && displayOpacity >= 1) {
      fetchGroupData(location);
    }
  }, [location, isVisible, displayOpacity]);
  useEffect(() => {
    if (displayOpacity > 1 && group && group.examList) {
      const exams = group.examList;
      setMembers([
        exams
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map(
            (
              {
                date,
                examTitle: title,
                examMaxGrade: maxGrade,
                examWeight: weight
              },
              index
            ) => (
              <Member key={index}>
                <Exam
                  {...{
                    date,
                    title,
                    maxGrade,
                    weight,
                    Display: students(location)
                  }}
                />
              </Member>
            )
          )
      ]);
    } else if (members !== []) {
      setMembers([]);
    }
  }, [group, isVisible, setVisible, displayOpacity]);
  return (
    <Display
      {...{
        logout: "absolute",
        isVisible,
        setVisible,
        displayOpacity,
        className: "exams-container",
        contentClassName: "exams",
        closeButtonClassName: "close-exams-button"
      }}
    >
      <Group columns={2} className="display-bar" hidden={displayOpacity <= 1}>
        <Member style={{ width: "calc(100% - 86px)" }}>
          <div className="display-title">{group && group.groupName}</div>
        </Member>
        <Member style={{ width: "86px" }}>
          <Button
            className="new-exam-button"
            onClick={e =>
              setMembers([
                <Member key={e.target.key + members.length}>
                  <Exam Display={students(location)} />
                </Member>,
                ...members
              ])
            }
          >
            +
          </Button>
        </Member>
      </Group>
      <Filter
        getHeight={height => setHeight(height)}
        heightDividedBy={5}
        {...{ keys, setKeys }}
        toLowerCase
      />
      {isVisible && (
        <Group
          className="exams-list"
          style={{
            height: `calc(100% - 53px - ${height}px)`
          }}
          hidden={displayOpacity <= 1}
          filters={dateAndTitleFilter(keys)}
        >
          {members}
        </Group>
      )}
    </Display>
  );
}

export default location => (setVisible, isVisible, displayOpacity) =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Exams.bind(this, location, setVisible, isVisible, displayOpacity));

function dateAndTitleFilter(keys) {
  return member => {
    const dateValue =
      member &&
      member.props &&
      member.props.children &&
      member.props.children.props &&
      member.props.children.props.date &&
      member.props.children.props.date.toLowerCase &&
      member.props.children.props.date.toLowerCase();
    const titleValue =
      member &&
      member.props &&
      member.props.children &&
      member.props.children.props &&
      member.props.children.props.title &&
      member.props.children.props.title.toLowerCase &&
      member.props.children.props.title.toLowerCase();
    let titleMatches = titleValue && titleValue.includes(keys.join(""));
    if (titleMatches) {
      return titleMatches;
    } else if (dateValue) {
      for (let key of keys
        .join("")
        .replace(" ", "-")
        .split("-")) {
        if (!dateValue.includes(key)) {
          return false;
        }
      }
      return dateValue;
    } else return true;
  };
}
