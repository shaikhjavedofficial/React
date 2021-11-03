import { combineReducers, createStore } from "redux";
import { RecipeReducer } from "../Reducers/RecipeReducer";

export const ConfigStore = () => {
  const store = createStore(
    combineReducers({ RecipeReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
