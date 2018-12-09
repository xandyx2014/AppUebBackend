const sql = require("mssql");
let request = new sql.Request();

 function testModel() {
  return new Promise((resolve, reject) => {
    request.query('select * from tbl_sto', function (err, recordset) {
      if (err) reject(err);
      resolve(recordset['recordset']);
    });
  });
  

}
  
  module.exports = {
    testModel
  }