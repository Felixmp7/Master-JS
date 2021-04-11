'use strict'

const express = require('express');
const cors = require('cors');

const app = express();

// archivos de rutas
const projectRoutes = require('./routes/project');

// middlewares

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS

app.use(cors());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

// rutas
app.use('/api', projectRoutes);

// exportar

module.exports = app;