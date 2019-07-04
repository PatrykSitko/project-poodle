import React, { useEffect, useState } from "react";
import Display from "./display";
import fetchGroupData from "../../../redux/actions/fetch/instructor/group";
import Filter from "../../dynamic/input/filter/key";
import Group from "../../group";
import Member from "../../group/member";
import P from "../../dynamic/p";
import { connect } from "react-redux";
import "./students.css";

const mapStateToProps = ({ group }) => {
  return { group };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGroupData: location => dispatch(fetchGroupData(location))
  };
};

export function Students(
  location,
  setVisible,
  isVisible,
  displayOpacity,
  { fetchGroupData, group }
) {
  const [keys, setKeys] = useState([]);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (!group) {
      fetchGroupData(location);
    }
  }, [group]);
  let members = [];
  if (group) {
    members = group.studentList.map(({ studentName, imageURL }) => {
      return (
        <Member>
          <div
            className="student-container"
            onClick={e =>
              typeof e.target.className === "string" &&
              e.target.className.includes("student-container") &&
              setVisible(false)
            }
            style={{
              padding: 10,
              width: "calc(100% - 20px)",
              height: "calc(100% - 20px)"
            }}
          >
            <img
              src={imageURL}
              alt={studentName}
              style={{
                float: "left",
                border: "3px solid black",
                borderRight: "none",
                width: "calc(20% - 3px)"
              }}
            />
            <div
              style={{
                padding: 0,
                float: "right",
                width: "calc(80% - 6px)",
                height: "calc(100% - 6px)",
                border: "3px solid black"
              }}
            >
              <P heightDividedBy={1.5} className="students-student-name">
                {studentName}
              </P>
            </div>
          </div>
        </Member>
      );
    });
  }
  return (
    <Display
      {...{
        isVisible,
        setVisible,
        displayOpacity,
        className: "students-container",
        contentClassName: "students",
        closeButtonClassName: "close-students-button"
      }}
    >
      <Filter
        className="students-filter"
        getHeight={height => setHeight(height)}
        heightDividedBy={5}
        {...{ keys, setKeys }}
        toLowerCase
      />
      <Group
        className="students-list"
        columns={1}
        globalStyle={{
          width: "100%"
        }}
        style={{
          height: `calc(100% - 53px - ${height}px)`
        }}
        filters={filterByName(keys)}
      >
        {members}
      </Group>
    </Display>
  );
}

export default location => (setVisible, isVisible, displayOpacity) =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Students.bind(this, location, setVisible, isVisible, displayOpacity));

function filterByName(keys) {
  return member => {
    const name =
      member.props &&
      member.props.children &&
      member.props.children.props &&
      member.props.children.props.children[1] &&
      member.props.children.props.children[1].props &&
      member.props.children.props.children[1].props.children &&
      member.props.children.props.children[1].props.children.props &&
      member.props.children.props.children[1].props.children.props &&
      member.props.children.props.children[1].props.children.props.children
        .toLowerCase &&
      member.props.children.props.children[1].props.children.props.children.toLowerCase();
    if (name.replace(" ", "").includes(keys.join("").replace(" ", ""))) {
      return true;
    }
    return false;
  };
}
