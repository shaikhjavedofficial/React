import {
  v4 as uuidv4
} from "uuid";

const EmpReducer = {
  groups: [{
      id: uuidv4(),
      name: "Shaikh Javed",
      age: "26",
      desc: "this is first group",
    },
    {
      id: uuidv4(),
      name: "Khaja Umar",
      age: "27",
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
export const groupReducer = (state = EmpReducer, action) => {
  switch (action.type) {
    case "ADD_NEW_GROUP":
      return {
        ...state,
        groups: [action.groups, ...state.groups], //if you run this it will print new data first to print new data last us [...state.groups, action.groups]
      };
    default:
      return state;
  }
};