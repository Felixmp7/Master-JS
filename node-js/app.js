'use strict'

const express = require('express');
const { urlencoded, json } = require('body-parser');

const app = express();

// archivos de rutas
const projectRoutes = require('./routes/project');

// middlewares

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', projectRoutes);

// CORS

// rutas

// exportar

module.exports = app;