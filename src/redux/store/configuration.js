import { combineReducers, applyMiddleware, compose } from "redux";
import { connectRoutes } from "redux-first-router";
import reducers from "../reducers/all";
import routes from "./routes";

export default (() => {
  const { reducer, middleware, enhancer } = connectRoutes(routes);

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middlewares = applyMiddleware(middleware);
  const enhancers = compose(
    enhancer,
    middlewares,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return [rootReducer, enhancers];
})();
