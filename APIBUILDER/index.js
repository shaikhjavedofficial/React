const express = require("express")
const app = express()
var dt = require("./Dated")
app.get("/", (req, res) => {
    res.json({
        data: ["umer", "Aamer", "sufi", "Azeem"],
        name: "javed",
        Date: dt.datet()
    });
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