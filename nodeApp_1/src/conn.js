const mongo = require("mongoose");

mongo
  .connect("mongodb://127.0.0.1:27017/", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection is successful");
  })
  .catch((e) => {
    console.log("no connection");
  });
