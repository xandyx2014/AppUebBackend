"use strict"
const { configMSSQL } = require('./config');
const sql = require("mssql");
sql.connect(configMSSQL, function (err) {
  if (err) console.log(err);
  const app = require('./app');
  app.set('port',3005);
  app.listen(process.env.PORT || app.get('port'), () => {
    console.log(`Conexion Correcta escuchando en el puerto ${ app.get('port') }`);
  });
});
  

