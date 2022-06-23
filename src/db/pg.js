const { Pool } = require("pg")
const config = require('./config');
const client = new Pool(config.db)

const qurryThis = async (param) => {
  await client.connect()
  client.query(param, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      return res.rows
    }
    client.end()
  })
}
module.exports = { qurryThis }
