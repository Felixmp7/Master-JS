'use strict'

const express = require('express');
const controller = require('../controllers/project');

const router = express.Router();

router.get('/home', controller.home);
router.post('/test', controller.test);

module.exports = router;