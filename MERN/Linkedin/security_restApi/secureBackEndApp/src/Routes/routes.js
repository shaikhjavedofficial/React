import {
  addNewContact,
  deleteContact,
  getContact,
  getContactId,
  updateContact,
} from "../Controllers/controllers_index";
import { login, register, loginRequired } from "../Controllers/UserController";

export const Routes = async (app) => {
  await app
    .route("/contact")
    .get(
      (req, res, next) => {
        console.log("mongo get");
        next();
      },
      loginRequired,
      getContact
    )
    .post(loginRequired, addNewContact);
  app
    .route("/contact/:contactID")
    .get(loginRequired, getContactId)
    .put(loginRequired, updateContact)
    .delete(loginRequired, deleteContact);

  app.route("/auth/register").post(register);
  app.route("/login").post(login);
};
