import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import LoginForm from "./components/LoginForm";

export default class App extends React.Component {
  state = {
    isLoggedIn: false
  };
  render() {
    return (
      <Provider store={store}>
        {this.state.isLoggedIn ? <p>welcome back</p> : <LoginForm />}
      </Provider>
    );
  }
  componentWillMount = () => {
    console.log(store.getState());
    const interval = setInterval(i => {
      if (
        (document.cookie.includes("test-token") ||
          (store.getState().sessionToken &&
            store.getState().sessionToken.includes("test-token"))) &&
        !this.state.isLoggedIn
      ) {
        this.setState({ isLoggedIn: true });
      } else if (
        store.getState().sessionToken &&
        !store.getState().sessionToken.includes("test-token") &&
        this.state.isLoggedIn
      ) {
        this.setState({ isLoggedIn: false });
      }
    }, 100);
    this.setState({ interval });
  };
}
