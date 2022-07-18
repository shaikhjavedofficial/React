const url = require("url");
const express = require("express");
const app = express();
var PORT = 3001;
app.use("/", (req, res) => {
  console.log("get call");
  res.send("get call");
});
app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});

console.log(
  "url===================",
  url.parse("localhost:3030/dates?year=2021&month=september", true)
);
const { exec } = require('child_process');

exec('"/path/to/test file/test.sh" arg1 arg2');

exec('echo "The \$HOME variable is $HOME"');