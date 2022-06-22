const express = require("express")
const app = express()
// set the view engine to ejs
// use res.render to load up an ejs view file
const Api = require("./src/index")
app.use("/", Api)

const port = 8000
app.listen(port)
console.log("Server is listening on port " + port)
