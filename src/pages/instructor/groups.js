import React from "react";
import Group from "../../components/group";
import Member from "../../components/group/member";
import ImageButton from "../../components/button/image";
import Logout from "../../components/button/logout";
import javaLogo from "../../images/java-logo.png";
import javaIotLogo from "../../images/java-iot-logo.png";
import dotNetLogo from "../../images/dotnet-logo.png";
import pcLogo from "../../images/pc-logo.png";
import { connect } from "react-redux";
import "./groups.css";

const mapStateToProps = ({ windowInnerWidth: { value } }) => {
  return { widnowInnerWidth: value };
};

export function Groups({ widnowInnerWidth }) {
  return [
    <Logout key="Logout" />,
    <Group
      key="groups"
      globalStyle={{ margin: 3 }}
      globalClassName="groups-member"
      /* columns={[[1, 500], [2, 1000], [3, 1500]]} */
      columns={Math.floor(widnowInnerWidth / 500)}
      filters={[
        member => member.props.children !== "hello",
        member => member.props.children !== "patryk",
        member => member.props.children !== "world",
        member => {
          console.log(member);
          return true;
        }
      ]}
      className="groups"
    >
      <Member key="2">
        <ImageButton image={javaLogo} go="/student/student">
          Java1
        </ImageButton>
      </Member>
      <Member key="7">
        <ImageButton image={dotNetLogo} go="/student/student">
          dotNet
        </ImageButton>
      </Member>
      <Member key="8">
        <ImageButton image={javaIotLogo} go="/student/student">
          Java & IOT
        </ImageButton>
      </Member>
      <Member key="9">
        <ImageButton image={pcLogo} go="/student/student" />
      </Member>
    </Group>
  ];
}

export default connect(mapStateToProps)(Groups);
