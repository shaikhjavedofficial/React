import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" "));
// mongoose.set("useFindAndModify", false);
const db = mongoose.connection;
db.on("error", () => {
  console.log("db error", error);
});

db.once("open", () => {
  console.log("Database connection open!");
});

export default db;
