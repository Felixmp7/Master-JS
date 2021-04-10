'use strict'

const express = require('express');
const controller = require('../controllers/project');

const router = express.Router();

router.get('/home', controller.home);
router.post('/test', controller.test);
router.post('/add-project', controller.addProject);
router.post('/project/:id?', controller.getProject);
router.get('/projects', controller.getAllProjects);

module.exports = router;