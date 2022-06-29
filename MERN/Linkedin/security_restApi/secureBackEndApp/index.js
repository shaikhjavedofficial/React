import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3001;

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://skjaved633:SKsun@10@cluster0.1ntth.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`the app is running on ${PORT}`);
});
