const { response } = require('express');
// const db = require('../service/db_config');

class AboutController {
    index(req, res, next) {
        res.render('about');
    }
}

module.exports = new AboutController();
