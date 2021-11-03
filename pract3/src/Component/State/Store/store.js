import { combineReducers, createStore } from "redux";
import { groupReducer } from "../Reducer/EmpReducer";
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      groupReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
