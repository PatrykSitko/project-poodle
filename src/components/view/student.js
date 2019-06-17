import React, { useEffect } from "react";
import Grades from "../grades";
import StudentInfo from "../student/info";
import Logout from "../button/logout";
import { connect } from "react-redux";
import fetchStudentInfo from "../../redux/actions/fetch/student";

function mapDispatchToProps(dispatch) {
  return {
    fetchStudentInfo: () => dispatch(fetchStudentInfo())
  };
}
export function Student({ fetchStudentInfo }) {
  useEffect(() => {
    fetchStudentInfo();
  }, [fetchStudentInfo]);
  return (
    <span>
      <Logout key="Logout" />
      <StudentInfo key="UserInfo" />
      <Grades key="Grades" />
    </span>
  );
}
export default connect(
  null,
  mapDispatchToProps
)(Student);
