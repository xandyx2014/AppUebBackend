"use strict";
const express = require('express');
const app = express();


app.use('/test',require('./routes/test.route'));
app.use('/facultad',require('./routes/facultad.route'));
app.use('/evento', require('./routes/eventos.route'));
app.use('/login', require('./routes/login.route'))


module.exports = app;