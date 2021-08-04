const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.send("I am from Pickupbiz......");
})
app.get("/emp", (req, res) => {
    res.send("Hire Employee")
})
app.get("/dept", (req, res) => {
    res.send("This is the Department")
})
if (app.listen(40)) {
    console.log("connected")
}