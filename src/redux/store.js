import { createStore } from "redux";
import { rootReducerWithInitialState as rootReducer } from "./reducers";

const initialState = {
  sessionToken: undefined
};

const store = createStore(rootReducer(initialState));

export default store;
