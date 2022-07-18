var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
var http = require("http").Server(app);
var io = require("socket.io")(http);
PORT = 3000;
app.use(cors());
app.use(express.static(__dirname));
// for decoding the post data
app.use(bodyParser.json());
// for decoding post request from browser
app.use(bodyParser.urlencoded({ extended: false }));
const messages = [
  { name: "Javed", message: "hi" },
  { name: "tim", message: "hello" },
];
app.get("/messages", (req, res) => {
  res.send(messages);
});
app.post("/messages", (req, res) => {
  messages.push(req.body);
  res.sendStatus(200);
  io.emit("message", req.body);
});
// socket.io conn
io.on("connection", (socket) => {
  console.log("user connected");
});

// for express, as socket.io will give error we use http
// const server = app.listen(PORT, () => {
//   console.log(`running on ${PORT}, or ${server.address().port}`);
// });

// for http
const server = http.listen(PORT, () => {
  console.log(`running on ${PORT}, or ${server.address().port}`);
});
