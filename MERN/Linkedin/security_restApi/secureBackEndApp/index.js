import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { Routes } from "./src/Routes/routes";
import jsonwebtoken from "jsonwebtoken";

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// jwt setup
app.use((req, res, next) => {
  // console.log(req.headers);
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    console.log("auth is running");
    jsonwebtoken.verify(
      req.headers.authorization.split(" ")[1],
      "RESTAPIs",
      (err, decode) => {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

app.listen(PORT, () => {
  console.log(`the app is running on ${PORT}`);
});

Routes(app);
