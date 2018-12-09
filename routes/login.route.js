const express = require('express');
const app = express.Router();
const login = require('../controllers/login.controller');


app.post('/', login.test);

module.exports = app;