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
        `<h1>Root page</h1>`
    )
});

app.get('/:id', (request, response) => {
    const id = request.params.id;
    const query = request.query;
    response.status(200).send(
        `
            <h1>
                Hola usuario numero: ${id}
            </h1>
            ${query.phone ? (
                `<b>${query.phone}</b>`
            ) : null}
        `
    )
});

app.post('/', (request, response) => {
    const { name, lastName } = request.body;

    response.status(200).send(
        `<h1>Hola ${name} ${lastName}</h1>`
    )
});


app.get('/test', (request, response) => {
    response.status(200).send({
        message: 'Hola Mundo desde mi API en Express'
    })
});

// exportar

module.exports = app;