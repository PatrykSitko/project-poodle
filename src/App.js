import { browserHistory } from "./redux/store/configuration";
import { Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Student from "./pages/student";
import Groups from "./components/group";
import { connect } from "react-redux";
import React from "react";
import "./App.css";

const mapStateToProps = ({ session: { token } }) => {
  return { token };
};
export const App = ({ token }) => (
  <Router history={browserHistory}>
    {!token ? (
      <Route path="/" component={Login} />
    ) : (
      <Switch>
        <Route path="/student/:userName" exact component={Student} />
        <Route path="/instructor/groups" exact component={Groups} />
        <Route path="/instructor/groups/:group" exact component={null} />
      </Switch>
    )}
  </Router>
);

export default connect(mapStateToProps)(App);
