import bindWindowListeners from "./listeners/window";
import configuration from "./configuration";
import { createStore } from "redux";

const [reducers, enhancers] = configuration;

const store = createStore(reducers, enhancers);

bindWindowListeners(store);

export default store;
