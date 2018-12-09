const sql = require("mssql");
let request = new sql.Request();

 function verModel() {
  return new Promise((resolve, reject) => {
    request.query('select * from tbl_fac', function (err, recordset) {
      if (err) reject(err);
      resolve(recordset['recordset']);
    });
  });
  

}
  
  module.exports = {
    verModel
  }