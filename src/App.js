import React from "react";
import { connect } from "react-redux";
import "./App.css";
import ShowLoginScreen from "./components/LoginForm";
import LoadView from "./components/ViewLoader";

const App = __ => __.ifUserIsConnectedThenLoadView() || <ShowLoginScreen />;

// @ts-ignore
export default connect(({ token, url }) => {
  return { ifUserIsConnectedThenLoadView: () => token && url && <LoadView /> };
})(App);
