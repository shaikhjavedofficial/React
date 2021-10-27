const RecipeData = {
  data: [
    {
      Id: 1,
      Name: "Tandori Chicken",
      Cat: "Starter",
    },
    {
      Id: 2,
      Name: "Chicken cury",
      Cat: "Main Course ",
    },
    {
      Id: 3,
      Name: "Salad",
      Cat: "Desert",
    },
  ],
};

export const RecipeReducer = (state = RecipeData, action) => {
  switch (action.type) {
    case "Add_Recipe":
      return {
        ...state,
        data: [state.data, ...action.data],
      };
    default:
      return state;
  }
};
