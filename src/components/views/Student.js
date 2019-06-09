import React from "react";
import Grades from "../Grades";
import UserInfo from "../UserInfo";

export default function Student() {
  return [<UserInfo key="UserInfo" />, <Grades key="Grades" />];
}
