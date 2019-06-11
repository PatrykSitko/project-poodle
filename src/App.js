import React from "react";
import ShowLoginScreen from "./components/LoginForm";
import LoadView from "./components/ViewLoader";
import { connect as App } from "react-redux";
import "./App.css";

function props({ token, url }) {
  return {
    isConnectedThenLoadView: () => token && url && <LoadView />
  };
}

export default App(props)(
  // @ts-ignore
  user => user.isConnectedThenLoadView() || <ShowLoginScreen />
);
