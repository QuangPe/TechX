const { response } = require('express');
// const db = require('../service/db_config');

class ContactController {
    index(req, res, next) {
        res.render('register');
    }
}

module.exports = new ContactController();
