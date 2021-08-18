export const addNewGroup = (name, id) => ({
    type: "ADD_NEW_GROUP",
    groups: {
        name,
        id,
    }
});