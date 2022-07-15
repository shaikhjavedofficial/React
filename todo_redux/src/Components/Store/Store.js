import { combineReducers, compose, createStore, applyMiddleware } from "redux";

import { TaskReducer } from "./Reducer";

export const ConfigStore = () => {
  const store = createStore(
    combineReducers({
      TaskReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
