import express from "express";
import routes from "./src/Routes/routes_index";
const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`the app is running on ${PORT}`);
});
routes(app);
