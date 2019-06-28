import React from "react";
import ImageButton from "../../button/image";
import Group from "../../group";
import display from "./display";
import Member from "../../group/member";
import javaLogo from "../../../images/java-logo.png";
import javaIotLogo from "../../../images/java-iot-logo.png";
import dotNetLogo from "../../../images/dotnet-logo.png";
import pcLogo from "../../../images/pc-logo.png";
import { connect } from "react-redux";
import "./groups.css";

const mapStateToProps = ({
  router: { pathname },
  groups,
  windowInnerWidth: { value }
}) => {
  return { groups, windowInnerWidth: value, pathname };
};
export function Groups({ filter, groups, pathname, windowInnerWidth }) {
  const members =
    groups &&
    Object.values(groups).map(({ groupName, id }, index) => {
      let image = "";
      if (groupName.toLowerCase().includes("java")) {
        if (groupName.toLowerCase().includes("iot")) {
          image = javaIotLogo;
        } else {
          image = javaLogo;
        }
      }
      if (groupName.toLowerCase().includes("dotnet")) {
        image = dotNetLogo;
      }
      if (groupName.toLowerCase().includes("pc")) {
        image = pcLogo;
      }
      return (
        <Member key={index}>
          <ImageButton image={image} Display={display(`${pathname}/${id}`)}>
            {groupName}
          </ImageButton>
        </Member>
      );
    });
  return (
    <Group
      key="groups"
      globalStyle={{ margin: 3 }}
      globalClassName="groups-member"
      /*columns={[[1, 500], [2, 1000], [3, 1500]]}*/
      columns={Math.floor(windowInnerWidth / 500)}
      filters={filter}
      className="groups"
    >
      {members}
    </Group>
  );
}

export default connect(mapStateToProps)(Groups);
