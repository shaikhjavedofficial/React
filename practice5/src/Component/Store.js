import { combineReducers, createStore } from "redux";
import { DataReducer } from "./Reducer";
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      DataReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
