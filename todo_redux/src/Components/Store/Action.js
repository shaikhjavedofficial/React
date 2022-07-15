export const TaskAction = (id, todotask) => (
  {
    type: "ADD_NEW",
    data: {
      id,
      todotask,
    },
  },
  {
    type: "EDIT",
    data: {
      id,
      todotask,
    },
  }
);
