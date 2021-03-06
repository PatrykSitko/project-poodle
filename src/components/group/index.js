import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import Member from "./member";
import "./group.css";

const mapStateToProps = ({ windowInnerWidth: { value } }) => {
  return {
    windowInnerWidth: value
  };
};
export function Group({
  children: members,
  className,
  columns,
  globalStyle: memberGlobalStyle,
  globalClassName: memberGlobalClassName,
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
  if (!columns) {
    columns = 1;
  }
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
  let rows = undefined;
  if (ammountOfColumns < 1) {
    setAmmountOfColumns(1);
  }
  if (members) {
    if (members.length && ammountOfColumns > members.length) {
      setAmmountOfColumns(members.length);
    }
    if (members.flat) {
      members = members.flat();
    } else if (members.constructor.name !== "Array") {
      members = [members];
    }
    if (memberFilters) {
      if (memberFilters.constructor.name !== "Array") {
        memberFilters = [memberFilters];
      }
      memberFilters.forEach(filter => {
        if (members.filter && typeof filter === "function") {
          members = members.filter(filter);
        }
      });
    }
    rows = [];
    if (members.length) {
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
    }
    rows = rows.map((row, index) => {
      return (
        <span className="group-row" key={"group-row" + index}>
          {row.map((member, index, members) => {
            const props = { ...member.props };
            if (!props.style) {
              props.style = {};
            }
            if (!member.type || member.type.name !== "Member") {
              return member;
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
            if (!props.style.width || props.style.width <= 1) {
              props.style.width =
                componentWidth / members.length - margin * 2 - padding * 2;
            }
            props.id = member.key;
            const memberClassName =
              (props.className ? props.className : "") +
              "" +
              (memberGlobalClassName ? " " + memberGlobalClassName : "");
            delete props.className;
            return (
              <Member
                {...props}
                style={{ ...props.style, ...memberGlobalStyle }}
                key={member.key + `${index * 100}`}
                className={memberClassName}
              />
            );
          })}
        </span>
      );
    });
  }
  delete group.dispatch;
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
