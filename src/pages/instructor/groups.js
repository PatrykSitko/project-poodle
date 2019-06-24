import React, { useState, useEffect } from "react";
import Filter from "../../components/filter/key";
import Groups from "../../components/instructor/groups";
import Logout from "../../components/button/logout";
import { connect } from "react-redux";
import fetchGroupsInfo from "../../redux/actions/fetch/instructor/groups";

const mapDispatchToProps = dispatch => {
  return {
    fetchGroupsInfo: () => {
      dispatch(fetchGroupsInfo());
    }
  };
};

export function InstructorGroups({ fetchGroupsInfo }) {
  const [keys, setKeys] = useState([]);
  const [strict, setStrict] = useState(false);
  useEffect(() => {
    fetchGroupsInfo();
  }, [fetchGroupsInfo]);
  return (
    <span>
      <Filter {...{ keys, setKeys }} toLowerCase />
      <Logout />
      <Groups
        filter={member => {
          const buttonValue =
            member &&
            member.props &&
            member.props.children &&
            member.props.children.props &&
            member.props.children.props.children &&
            member.props.children.props.children.toLowerCase &&
            member.props.children.props.children.toLowerCase();
          if (strict) {
            return buttonValue && buttonValue.includes(keys.join(""));
          } else {
            for (let key of keys) {
              if (!buttonValue || !buttonValue.includes(key)) {
                return false;
              }
            }
            return buttonValue;
          }
        }}
      />
    </span>
  );
}

export default connect(
  null,
  mapDispatchToProps
)(InstructorGroups);
