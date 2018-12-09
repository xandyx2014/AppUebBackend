const {verModel} = require('../models/facultad.model');

function verFacultad(req, res) {
  verModel().then((data) => {
    res.status(200).json({
      ok: true,
      data: data
   });
  }).catch((err) => {
    res.status(505).json({
      err: err,
      ok: false
   });
  });
  
}
module.exports = {
  verFacultad
}