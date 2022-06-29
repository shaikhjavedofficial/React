import {
  addNewContact,
  deleteContact,
  getContact,
  getContactId,
  updateContact,
} from "../Controllers/controllers_index";
export const mRoutes = async (app) => {
  await app
    .route("/contact/")
    .get((req, res, next) => {
      //middleware
      console.log("mongo get");
      next();
    }, getContact)
    .post(addNewContact);
  app
    .route("/contact/:contactID")
    .get(getContactId)
    .put(updateContact)
    .delete(deleteContact);
};
