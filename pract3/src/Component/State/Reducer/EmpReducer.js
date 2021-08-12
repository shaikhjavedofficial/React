import { v4 as uuidv4 } from "uuid";

const empReducer = {
  groups: [
    {
      id: uuidv4(),
      name: "Shaikh Javed",
      age: "23",
      desc: "this is first group",
    },
    {
      id: uuidv4(),
      name: "Khaja Umar",
      age: "23",
      desc: "this is 2nd group",
    },
    {
      id: uuidv4(),
      name: "Syed Sufiyan",
      age: "23",
      desc: "this is 3rd group",
    },
  ],
};
export const groupReducer = (state = empReducer, action) => {
  switch (action.type) {
    case "ADD_NEW_GROUP":
      return {
        ...state,
        groups: [action.groups, ...state.groups],
      };
    default:
      return state;
  }
};
