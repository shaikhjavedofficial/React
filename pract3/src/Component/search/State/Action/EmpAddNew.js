export const EmpAddNew = (FirstName, LastName, IMG, Address, Dept) => ({
  type: "ADD_NEW_EMP",
  Data: {
    FirstName,
    LastName,
    IMG,
    Address,
    Dept,
  },
});