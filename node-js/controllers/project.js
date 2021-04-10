// Será un objeto JSON o una clase que podra tener una serie de atributos y metodos con los que podra interactuar con la entidad de Proyectos.
'use strict'

const controller = {
    home: (req, res) => {
        return res.status(200).send({
            status: 'success'
        });
    },
    test: (req, res) => {
        return res.status(200).send({
            status: 'success'
        });
    }
};

module.exports = controller;