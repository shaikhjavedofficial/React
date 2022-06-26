export const addNewGroup = (id, fname, lname, email, pass) => (
  {
    type: "ADD_NEW",
    groups: {
      id,
      fname,
      lname,
      email,
      pass,
    },
  },
  {
    type: "EDIT",
    groups: {
      id,
      fname,
      lname,
      email,
      pass,
    },
  }
);
