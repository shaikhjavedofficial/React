import express from "express";
// import routes from "./src/Routes/routes_index";
import { mRoutes } from "./src/Routes/routes_mongo";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// mongoose connectiom
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// to add static files like audio, video, images
app.use(express.static("public"));

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`the app is running on ${PORT}`);
});
// routes(app);
mRoutes(app);
