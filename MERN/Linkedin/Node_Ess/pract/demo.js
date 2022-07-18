const fs = require("fs");

// read a file
const data = require("./db.json");
console.log(data.name);
fs.readFile("./db.json", "utf-8", (err, data) => {
  var data = JSON.parse(data);
  console.log(data.name);
});

// read directory
fs.readdir("/home/devil/Videos/", (err, data) => {
  console.log(data);
});

// writing to a file
var demodata = {
  name: "shaikh javed",
};

fs.writeFile(
  "data1.json",
  JSON.stringify({
    name: "shaikh - javed",
  }),
  (err) => {
    console.log("writing file", err);
  }
);
