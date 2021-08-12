import { combineReducers, createStore } from "redux";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      EmpReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
  );
  return store;
};
