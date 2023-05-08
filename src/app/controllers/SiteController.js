const { response } = require('express');

class SiteController {
    index(req, res, next) {
        res.render('home');
    }
}

module.exports = new SiteController();
