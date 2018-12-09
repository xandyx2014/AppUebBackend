const express = require('express');
const app = express.Router();
const test = require('../controllers/test.controller');


app.get('/prueba', test.test);

module.exports = app;