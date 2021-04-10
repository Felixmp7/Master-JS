'use strict'

const express = require('express');
const { urlencoded, json } = require('body-parser');

const app = express();

// archivos de rutas
const projectRoutes = require('./routes/project');

// middlewares

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS

// rutas
app.use('/api', projectRoutes);

// exportar

module.exports = app;