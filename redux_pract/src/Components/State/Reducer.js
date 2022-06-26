import { v4 as uuidv4 } from "uuid";
const EmpReducer = {
  groups: [
    {
      id: uuidv4(),
      fname: "Shaikh",
      lname: "Javed",
      email: "shaikhjaved.s@hcl.com",
      pass: "123456",
    },
    {
      id: uuidv4(),
      fname: "Azeem",
      lname: "Premji",
      email: "azpremji@hcl.com",
      pass: "456789",
    },
    {
      id: uuidv4(),
      fname: "Hareesh",
      lname: "Pande",
      email: "HareeshP@hcl.com",
      pass: "123456",
    },
  ],
};

export const GroupReducer = (state = EmpReducer, action) => {
  switch (action.type) {
    case "ADD_NEW":
      return {
        ...state,
        groups: [...state.groups, action.groups],
      };
    case "EDIT":
      state.groups.map((item, i) => {
        if (item.id == action.groups.id) {
          console.log(item.id);

          state.groups[i] = action.groups;
        }
      });
      return state;
    default:
      return state;
  }
};
