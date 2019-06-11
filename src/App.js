import React, { useEffect as redux } from "react";
import { setDimension } from "./redux/actions";
import { connect } from "react-redux";
import "./App.css";
import ShowLoginScreen from "./components/LoginForm";
import LoadView from "./components/ViewLoader";

function mapStateToProps({ token, url }) {
  return {
    isConnectedThenLoadView: () => token && url && <LoadView />
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setDimension: (width, height) => dispatch(setDimension(width, height))
  };
}
function startTrackingDimensionOf({ setDimension }) {
  const dimensionTracker = setDimension =>
    setDimension(window.innerWidth, window.innerHeight);
  return () => {
    window.addEventListener(
      "resize",
      dimensionTracker.bind(this, setDimension)
    );
    return () =>
      window.removeEventListener(
        "resize",
        dimensionTracker.bind(this, setDimension)
      );
  };
}
const Launcher = app => [
  redux(startTrackingDimensionOf(app), []),
  app.isConnectedThenLoadView() || <ShowLoginScreen />
];

const app = connect(
  mapStateToProps,
  mapDispatchToProps
);
// @ts-ignore
export default app(Launcher);
