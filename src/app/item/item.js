const { Router } = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { items } = require("../../models")
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

const entry_by = 'dumy'
const d = Date()


api.post("/add", async (req, res) => {
  const { barcode, cat_id, item_status } = req.body
  const data = await items.create({ BARCODE: barcode, CAT_ID: cat_id, ITEM_STATUS: item_status, ENTRY_BY: entry_by, ENTRY_DATE: d })
  res.json(data)
})



api.get("/update", async (req, res) => {
  res.sendStatus(200)
})
api.get("/drop", async (req, res) => {
  res.sendStatus(200)
})
api.get("/", async (req, res) => {
  res.send(items.findAll())
})

module.exports = api
