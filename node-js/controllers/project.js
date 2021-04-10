// Será un objeto JSON o una clase que podra tener una serie de atributos y metodos con los que podra interactuar con la entidad de Proyectos.
'use strict'

const ProjectModel = require('../models/project');

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
    },
    addProject: (req, res) => {
        const newProject = new ProjectModel();
        const { name, description, year, category, langs } = req.body;

        newProject.name = name;
        newProject.description = description;
        newProject.year = year;
        newProject.image = null;
        newProject.category = category;
        newProject.langs = langs;

        newProject.save((error, projectSaved) => {
            if (error) {
                return res.status(500).send({
                    status: 'error',
                    message: "Ocurrió un error en el servidor."
                });
            } else if (!projectSaved) {
                return res.status(404).send({
                    status: 'error',
                    message: "Ocurrió un error al almacenar el nuevo proyecto."
                });
            } else {
                return res.status(200).send({
                    status: 'success',
                    data: { ...projectSaved._doc}
                });
            }
        });
    }
};

module.exports = controller;