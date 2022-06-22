const { Client } = require("pg")
const client = new Client()

const qurryThis = async (param) => {
  await client.connect()
  client.query(param, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      return res.rows[0].message
    }
    client.end()
  })
}
module.exports = { qurryThis }
