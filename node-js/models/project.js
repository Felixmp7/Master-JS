'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Ahora puedo crear un esquema JSON que represente el molde de cada Documento Project en mi colección.
const ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: [String]
});

module.exports = mongoose.model('Project', ProjectSchema);
//                   Nombre de la entidad, Esquema JSON
// mongoose toma el nombre de la entidad, lo transforma en minusculas y lo pluraliza de forma que Project => projects