import { combineReducers, createStore } from "redux";
import { ProductReducer } from "../Reducer/ProductReducer";
export const ConfigStore = () => {
  const store = createStore(
    combineReducers({
      ProductReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
