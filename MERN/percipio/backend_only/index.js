import express from "express";
import users from "./db/users";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 8080;

// get routes to get all users
app.get("/v1/users", (req, res) => {
  console.log("get Data", users);
  res.send(users); // here for server db use the api instead of users
});

//get route to get an user with id
app.get(`/v1/users/:id`, (req, res) => {
  res.send(users[0]);
  res.status(200).end();
});

// post route to generate a new route
app.post("/v1/users/", (req, res) => {
  const id = req.body.id;
  const username = req.body.username;
  const role = req.body.role;
  console.log("post : data =>", id, username, role);
  res.status(200).end();
});

// to update an user data using id
app.put("/v1/users/:id", (req, res) => {
  const id = req.body.id;
  const username = req.body.username;
  const role = req.body.role;
  const msg = "put : data=>" + " " + id + " " + username + " " + role;
  console.log(msg);
  res.send(msg);
  res.status(200).end();
});

// to delete an user with id
app.delete("/v1/users/:id", (req, res) => {
  const msg = "delete id=>" + " " + req.params.id;
  console.log(msg);
  res.send(msg);
  res.status(200).end();
});

app.listen(port, () => console.log(`express is listening on port ${port}!`));
