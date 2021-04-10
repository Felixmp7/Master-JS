// Será un objeto JSON o una clase que podra tener una serie de atributos y metodos con los que podra interactuar con la entidad de Proyectos.
'use strict'

const Project = require('../models/project');

const controller = {
    home: (req, res) => res.status(200).send({ status: 'success' }),
    test: (req, res) => res.status(200).send({ status: 'success' }),
    addProject: (req, res) => {
        const newProject = new Project();
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
            }
            return res.status(200).send({
                status: 'success',
                data: { ...projectSaved._doc}
            });
        });
    },
    getProject: (req, res) => {
        const { id } = req.params;

        if (!id) {
            return res.status(200).send({
                status: 'success',
                message: "No existe ID."
            });
        }
        Project.findById(id, (error, projectFinded) => {
            if (error) {
                return res.status(500).send({
                    status: 'error',
                    message: "Ocurrió un error en el servidor."
                });
            } else if (!projectFinded) {
                return res.status(404).send({
                    status: 'error',
                    message: "No se encontró el proyecto."
                });
            }
            return res.status(200).send({
                status: 'success',
                data: { ...projectFinded._doc }
            });
        });
    },
    getAllProjects: (req, res) => {
        Project.find({}).exec((error, projects) => {
            if (error) {
                return res.status(500).send({
                    status: 'error',
                    message: "Ocurrió un error en el servidor."
                });
            } else if (!projects) {
                return res.status(404).send({
                    status: 'error',
                    message: "No existen proyectos"
                });
            }
            return res.status(200).send({
                status: 'success',
                data: [...projects]
            });
        });
    },
    updateProject: (req, res) => {
        const { id } = req.params;
        const dataUpdated = req.body;

        if (!id) {
            return res.status(200).send({
                status: 'success',
                message: "No existe ID."
            });
        }
        Project.findByIdAndUpdate(id, dataUpdated, { new: true }, (error, projectUpdated) => {
            if (error) {
                return res.status(500).send({
                    status: 'error',
                    message: "Ocurrió un error en el servidor."
                });
            } else if (!projectUpdated) {
                return res.status(404).send({
                    status: 'error',
                    message: "No existen proyectos"
                });
            }
            return res.status(200).send({
                status: 'success',
                data: {...projectUpdated._doc}
            });
        });
    },
};

module.exports = controller;