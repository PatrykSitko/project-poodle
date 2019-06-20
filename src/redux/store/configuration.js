import { combineReducers, applyMiddleware, compose } from "redux";
import { createBrowserHistory, routerMiddleware } from "redux-first-routing";
import reducers from "../reducers/all";
import thunk from "redux-thunk";
import router from "./router";

export const browserHistory = (() => createBrowserHistory())();

export default (() => {
  const rootReducer = combineReducers({ ...reducers, router: router });
  const middlewares = applyMiddleware(routerMiddleware(browserHistory), thunk);
  const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__?compose(
    middlewares, window.__REDUX_DEVTOOLS_EXTENSION__()
  ):middlewares;
  return [rootReducer, enhancers];
})();
