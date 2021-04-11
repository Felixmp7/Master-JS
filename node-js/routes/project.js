'use strict'

const express = require('express');
const multiParty = require('connect-multiparty');
const controller = require('../controllers/project');

const multyPartyMiddleware = multiParty({ uploadDir: './uploads'})
const router = express.Router();

router.get('/home', controller.home);
router.post('/test', controller.test);
router.post('/add-project', controller.addProject);
router.post('/project/:id?', controller.getProject);
router.get('/projects', controller.getAllProjects);
router.put('/project/:id', controller.updateProject);
router.delete('/project/:id', controller.deleteProject);
router.post('/upload-image/:id', multyPartyMiddleware, controller.uploadImage);

module.exports = router;