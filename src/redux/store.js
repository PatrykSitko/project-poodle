import { createStore } from "redux";
import { bindEventListeners } from "./eventListeners";
import { rootReducer } from "./reducers";

const initialState = {
  token: undefined,
  url: undefined,
  data: undefined,
  width: window.innerWidth,
  height: window.innerHeight
};

const store = createStore(
  rootReducer,
  // @ts-ignore
  initialState,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

bindEventListeners(store);

export default store;
