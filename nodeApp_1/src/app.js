const express = require("express");
require("./conn");
const app = express();
app.get("/", (req, res) => {
  res.send("hi");
});
app.post("/employee", (req, res) => {
  res.send("hello");
});

app.listen(3002, () => {
  console.log("started at 3002");
});
