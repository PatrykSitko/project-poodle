import React from "react";
import { connect } from "react-redux";
import "./App.css";
import LoginForm from "./components/LoginForm";
import ViewLoader from "./components/ViewLoader";

function App({ isConnected }) {
  return (isConnected() && <ViewLoader />) || <LoginForm />;
}
// @ts-ignore
export default connect(({ token, url }) => {
  return { isConnected: () => token && url };
})(App);

// async function getData(url, token) {
//   const res = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ token: token })
//   });
//   return await res.json();
// }
