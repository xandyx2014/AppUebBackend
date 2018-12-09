const {testModel} = require('../models/test.model');

function test(req, res) {
  testModel().then((data) => {
    res.status(200).json({
      ok: data
   });
  }).catch((err) => {
    res.status(505).json({
      err: err
   });
  });
  
}
module.exports = {
  test
}