const { loginModel } = require('../models/login.model');

function test(req, res) {
  const idAlu = req.body.id_alu;
  const pinAlu = req.body.pin_alu;
  if (idAlu === null) {
    res.status(505).json({
      ok: false,
      err: 'Faltan los paremetros'
    });
  }
  loginModel(idAlu,pinAlu).then((data) => {
    res.status(200).json({
      ok: true,
      data
   });
  }).catch((err) => {
    res.status(505).json({
      ok: false,
      err
   });
  });
  
}
module.exports = {
  test
}