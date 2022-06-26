import express from "express";
import routes from "./src/Routes/routes_index";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;

// mongoose connectiom
mongoose.Promise = global.Promise;

app.listen(PORT, () => {
  console.log(`the app is running on ${PORT}`);
});
routes(app);
