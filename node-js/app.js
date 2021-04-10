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

app.get('/', (request, response) => {
    response.status(200).send(
        "<h1>Root Page</h1>"
    )
})

app.get('/test', (request, response) => {
    response.status(200).send({
        message: 'Hola Mundo desde mi API en Express'
    })
})

// exportar

module.exports = app;