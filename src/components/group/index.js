import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import Member from "./member";
import "./group.css";

const mapStateToProps = ({ windowInnerWidth: { value } }) => {
  return { windowInnerWidth: value };
};
export function Group({
  children: members,
  className,
  columns,
  globalStyle: memberGlobalStyle,
  filters: memberFilters,
  windowInnerWidth,
  ...group
}) {
  const groupComponent = useRef();
  const [ammountOfColumns, setAmmountOfColumns] = useState(1);
  const [componentWidth, setComponentWidth] = useState(1);

  useEffect(() => {
    const groupComponentWidth = ReactDOM.findDOMNode(
      groupComponent.current
    ).getBoundingClientRect().width;
    if (componentWidth !== groupComponentWidth) {
      setComponentWidth(groupComponentWidth);
    }
  }, [groupComponent, componentWidth, windowInnerWidth]);

  if (typeof columns === "number") {
    columns = [[columns, 0]];
  }

  useEffect(() => {
    if (columns && columns.constructor.name === "Array") {
      columns.forEach(column => {
        if (column && column.constructor.name === "Array") {
          const [columnAmmount, maxWidth] = column;
          if (componentWidth >= maxWidth) {
            setAmmountOfColumns(columnAmmount);
          }
        }
      });
    }
  }, [columns, componentWidth, windowInnerWidth]);

  if (ammountOfColumns > members.length) {
    setAmmountOfColumns(members.length);
  }
  if (ammountOfColumns < 1) {
    setAmmountOfColumns(1);
  }

  let rows = undefined;
  if (members) {
    if (memberFilters) {
      if (memberFilters.constructor.name !== "Array") {
        memberFilters = [memberFilters];
      }
      memberFilters.forEach(filter => {
        if (typeof filter === "function") {
          members = members.filter(filter);
        }
      });
    }
    rows = [];
    for (
      let member = 0;
      member < members.length;
      member = member + ammountOfColumns
    ) {
      const row = [];
      for (let index = 0; index < ammountOfColumns; index++) {
        row.push(members[member + index]);
      }
      rows.push(row.filter(member => member !== undefined));
    }
    rows = rows.map(row => (
      <span className="group-row">
        {row.map((member, index, members) => {
          const props = { ...member.props };
          if (!props.style) {
            props.style = {};
          }
          let margin = 0;
          let padding = 0;
          if (memberGlobalStyle) {
            if (typeof memberGlobalStyle.margin === "number") {
              margin = memberGlobalStyle.margin;
            }
            if (typeof memberGlobalStyle.padding === "number") {
              padding = memberGlobalStyle.padding;
            }
          }
          props.style.width =
            componentWidth / members.length - margin * 2 - padding * 2;
          props.id = member.key;
          return (
            <Member
              {...props}
              style={{ ...props.style, ...memberGlobalStyle }}
              key={member.key}
            />
          );
        })}
      </span>
    ));
  }
  return (
    <div
      {...group}
      ref={groupComponent}
      className={"group" + (className ? " " + className : "")}
    >
      {rows}
    </div>
  );
}

export default connect(mapStateToProps)(Group);
