const express = require('express');
const app = express.Router();
const Eventos = require('../controllers/evento.controller');


app.get('/', Eventos.verEventos);

module.exports = app;