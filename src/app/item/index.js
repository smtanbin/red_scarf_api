const { Router } = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const api = Router()

// Cors Config
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Middlewares
api.use(cors(corsOptions))
api.use(bodyParser.json())

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accepcact"
  )
  res.header("Access-Control-Allow-Methods", ["GET", "POST", "PATCH", "DELETE"])
  next()
})

const { insert_item, select } = require("./item")

const entry_by = 'dumy'


api.post("/add", async (req, res) => {

  res.send(insert_item(req.body.barcode, req.body.cat_id, entry_by))
})
api.get("/update", async (req, res) => {
  res.sendStatus(200)
})
api.get("/drop", async (req, res) => {
  res.sendStatus(200)
})
api.get("/", async (req, res) => {
  res.send(select())
})

module.exports = api
