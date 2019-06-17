import { browserHistory } from "./redux/store/configuration";
import { Router, Switch, Route } from "react-router-dom";
import ShowLoginScreen from "./components/login";
import Student from "./components/view/student";
import { connect } from "react-redux";
import React from "react";
import "./App.css";

const mapStateToProps = ({ session: { token } }) => {
  return { token };
};
export const App = ({ token }) => (
  <Router history={browserHistory}>
    {!token ? (
      <Route path="/" component={ShowLoginScreen} />
    ) : (
      <Switch>
        <Route path="/student/:userName" exact component={Student} />
      </Switch>
    )}
  </Router>
);

export default connect(mapStateToProps)(App);
