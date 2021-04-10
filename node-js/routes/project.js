'use strict'

const express = require('express');
const controller = require('../controllers/project');

const router = express.Router();

router.get('/home', controller.home);
router.post('/test', controller.test);
router.post('/add-project', controller.addProject);

module.exports = router;