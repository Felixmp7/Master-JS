'use strict'

const express = require('express');
const { urlencoded, json } = require('body-parser');

const app = express();

// documentos de rutas

// middlewares

app.use(urlencoded({ extended: false }));
app.use((json()));

// CORS

// rutas

// exportar

module.exports = app;