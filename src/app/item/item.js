const { dirname } = require("path")
const moment = require("moment")
const appDir = dirname(require.main.filename)
const { qurryThis } = require(appDir + "\\src\\db\\pg.js")
const d = new Date()
const select = async () => {

  const sql = `SELECT barcode, cat_id, item_status, entry_date, entry_by, sell_date, sell_by, update_date, update_by
FROM "RS".item`
  await qurryThis(sql)
}
const insert_item = async (barcode, cat_id, entry_by) => {
  const entry_date = moment(d).format('YYYY-MM-DD')
  const sql = `INSERT INTO "RS".item (barcode, cat_id,item_status entry_date, entry_by)
   VALUES('${barcode}', '${cat_id}', 'false','${entry_date}', '${entry_by}')`
  console.log(sql);
  await qurryThis(sql)

}

module.exports = { insert_item, select }
