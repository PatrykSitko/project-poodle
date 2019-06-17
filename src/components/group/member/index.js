import React from "react";
import "./member.css";

export default function Individual({ children, className, ...props }) {
  return (
    <div
      {...props}
      className={"group-member" + (className ? " " + className : "")}
    >
      {children}
    </div>
  );
}
