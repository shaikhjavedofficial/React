import { UserModel } from "../models/User";
export default (app) => {
  /*
   *this is the users api v1
   */
  //    Get user
  app.get("/v1/users/", async (req, res) => {
    const users = await UserModel.find();
    res.send(users);
    console.log(users);
  });
  // Get user with specific id
  app.get("/v1/users/:id", async (req, res) => {
    const users = await UserModel.findById(req.params.id);
    if (users) {
      res.send(users);
    } else {
      res.status(404).end();
    }
  });
  //   post new user
  app.post("/v1/users/", async (req, res) => {
    const user = await UserModel.create(req.body);
    if (user) {
      res.status(200).end();
    } else {
      res.status(500).end();
    }
  });
};
