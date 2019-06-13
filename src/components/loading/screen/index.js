import React from "react";
import loading from "../../../images/loading.gif";

export default function LoadingScreen() {
  return <img src={loading} alt="loading..." className={"loading-screen"} />;
}
