export const AddRecipeNew = (Id, Name, Cat) => ({
  type: "Add_Recipe",
  data: { Id, Name, Cat },
});
