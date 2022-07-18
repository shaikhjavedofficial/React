var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
var http = require("http").Server(app);
var io = require("socket.io")(http);
var mongoose = require("mongoose");
PORT = 3000;
// mongodb here encode the special char in password or usewrname like @ = %40
// here to include database name write the db name like "mongodb+srv://skjaved633:SKsun%4010@cluster0.1ntth.mongodb.net/your_db_Name?retryWrites=true&w=majority";
const mUrl =
  "mongodb+srv://skjaved633:SKsun%4010@cluster0.1ntth.mongodb.net/cloud_data_mdb?retryWrites=true&w=majority";
var Message = mongoose.model("Message", {
  name: String,
  message: String,
});

// rest api app server
app.use(cors());
app.use(express.static(__dirname));
// for decoding the post data
app.use(bodyParser.json());
// for decoding post request from browser
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/messages", (req, res) => {
  Message.find({}, (err, messages) => {
    res.send(messages);
  });
});
// here set the mongodb post
app.post("/messages", (req, res) => {
  var message = new Message(req.body);
  message.save((err) => {
    if (err) sendStatus(200);
    res.sendStatus(200);
    io.emit("message", req.body);
  });
});
// socket.io conn
io.on("connection", (socket) => {
  console.log("user connected");
});
mongoose.connect(mUrl, (err) => {
  console.log("mongodb conection");
  err && console.log("error", err);
});
const server = http.listen(PORT, () => {
  console.log(`running on ${PORT}, or ${server.address().port}`);
});
