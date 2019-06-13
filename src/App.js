import React from "react";
import ShowLoginScreen from "./components/login";
import LoadView from "./components/view";
import { connect } from "react-redux";
import "./App.css";

function props({ session }) {
  return {
    isConnectedThenLoadView: () =>
      session && session.token && session.url && <LoadView />
  };
}

const App = user => user.isConnectedThenLoadView() || <ShowLoginScreen />;

export default connect(props)(App);
