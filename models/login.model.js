const sql = require("mssql");
const request = new sql.Request()

function loginModel(idAlu = 1, pinAlu = 1) {
  
  return new Promise((resolve, reject) => {
    console.log(idAlu, pinAlu);
    request.input('id_alu', sql.Int, idAlu);
    request.input('pin_alu', sql.Char, pinAlu);
    request.execute('sp_alu', (err, result) => {
      // ... error checks
      if (err) {
        reject('Ha ocurrido un Error en la bd')
      }
      console.log(result);
      if (result.rowsAffected[0] === 1) {
        resolve(result.recordset[0]);
      } else {
        reject('el usuario no existe');
      }
      
    });

  });


}

module.exports = {
  loginModel
}