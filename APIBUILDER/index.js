const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.send("i am from Pickupbiz......");
})
if (app.listen(40)) {
    console.log("connected")
}