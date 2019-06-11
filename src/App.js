import React from "react";
import ShowLoginScreen from "./components/LoginForm";
import LoadView from "./components/ViewLoader";
import { connect } from "react-redux";
import "./App.css";

function props({ token, url }) {
  return {
    isConnectedThenLoadView: () => token && url && <LoadView />
  };
}

const App = user => user.isConnectedThenLoadView() || <ShowLoginScreen />;

export default connect(props)(App);
