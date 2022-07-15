const Reducer = {
  data: [
    {
      id: 1,
      todotask: "breakfast",
    },
  ],
};

export const TaskReducer = (state = Reducer, action) => {
  switch (action.type) {
    case "ADD_NEW":
      return {
        ...state,
        data: [...state.data, action.data],
      };
    case "EDIT":
      state.data.map((item, i) => {
        if (item.id == action.data.id) {
          state.data[i] = action.data;
        }
      });
      return state;
    default:
      return state;
  }
};
