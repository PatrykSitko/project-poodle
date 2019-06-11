import React from "react";
import Grades from "../Grades";
import UserInfo from "../UserInfo";
import Logout from "../LogoutButton";

export default function Student() {
  return [
    <Logout key="Logout" />,
    <UserInfo key="UserInfo" />,
    <Grades key="Grades" />
  ];
}
