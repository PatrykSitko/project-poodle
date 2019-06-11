import React from "react";
import loading from "../images/loading.gif";

export default function LoadingScreen() {
  return (
    <img
      src={loading}
      alt="loading..."
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "contain"
      }}
    />
  );
}
