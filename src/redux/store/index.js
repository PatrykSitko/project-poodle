import { createStore } from "redux";
import bindWindowListeners from "./listeners/window";
import configure from "./configuration";
import reducers from "../reducers/all";

const store = createStore(
  reducers,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
configure(store);
bindWindowListeners(store);

export default store;
