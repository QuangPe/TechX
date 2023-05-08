const express = require('express');
const router = express.Router();
const aboutControler = require('../app/controllers/AboutController');

router.get('/', aboutControler.index);

module.exports = router;
