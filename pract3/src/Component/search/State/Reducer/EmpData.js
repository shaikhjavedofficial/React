const EmpData = {
  Data: [{
      FirstName: "Munna",
      LastName: "Tyagi",
      IMG: "man.png",
      Address: "MirzaPur",
      Dept: "Production & Supply",
    },
    {
      FirstName: "Srikant",
      LastName: "Tiwari",
      IMG: "man.png",
      Address: "Delhi",
      Dept: "Analytics",
    },
    {
      FirstName: "Bhaskar",
      LastName: "Bhosle",
      IMG: "man.png",
      Address: "Pune",
      Dept: "HR",
    },
    {
      FirstName: "Ravi",
      LastName: "Teja",
      IMG: "man.png",
      Address: "Vizak",
      Dept: "Advertising",
    },
    {
      FirstName: "Ravi",
      LastName: "Shukla",
      IMG: "man.png",
      Address: "Bhopal",
      Dept: "Import",
    },
    {
      FirstName: "Rohit",
      LastName: "Tyagi",
      IMG: "man.png",
      Address: "Kanpur",
      Dept: "Export",
    },
    {
      FirstName: "Rahul",
      LastName: "Khanna",
      IMG: "man.png",
      Address: "surat",
      Dept: "Supply",
    },
    {
      FirstName: "Mahendra",
      LastName: "Bahubali",
      IMG: "man.png",
      Address: "Hyderabad",
      Dept: "Q&A",
    },
    {
      FirstName: "Sachin",
      LastName: "Tendulkar",
      IMG: "man.png",
      Address: "Mumbai",
      Dept: "Production",
    },
  ],
};

export const empReducer = (state = EmpData, action) => {
  switch (action.type) {
    case "ADD_NEW_EMP":
      return {
        ...state,
        Data: [action.Data, ...state.Data],
      };
    default:
      return state;
  }
};