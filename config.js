const express = require('express');
const app = express();


const configMSSQL = {
  user: 'sa',
  password: '1234',
  server: '192.168.0.21', 
  database: 'app_ueb' 
};


module.exports = {
  configMSSQL
};