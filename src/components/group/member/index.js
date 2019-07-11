import React, { useState } from "react";
import "./member.css";
class MemberCounter {
  static count = 0;
}
export default function Member({ children, className, ...props }) {
  const memberKey = useState(MemberCounter.count++)[0];
  return (
    <div
      {...{
        ...props,
        key: `Member-${memberKey}}`,
        className: `group-member ${className ? className : ""}`
      }}
    >
      {children}
    </div>
  );
}
