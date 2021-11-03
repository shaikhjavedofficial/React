import { combineReducers, createStore } from "redux";
import { empReducer } from "../../../search/State/Reducer/EmpData";
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      empReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
