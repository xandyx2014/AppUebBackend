const express = require('express');
const app = express.Router();
const Facultad = require('../controllers/facultad.controller');


app.get('/', Facultad.verFacultad);

module.exports = app;