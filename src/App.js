import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App" />
    </Provider>
  );
}

export default App;
