const { dirname } = require("path")
const appDir = dirname(require.main.filename)
const { qurryThis } = require(appDir + "\\src\\db\\pg.js")

const show_all = () => {
  const sql = `select * from item`
  qurryThis
}

module.exports = { show_all }
