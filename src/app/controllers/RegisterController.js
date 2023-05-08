const { response } = require('express');

class RegisterController {
    index(req, res, next) {
        res.render('register');
    }

    handleRegister(req, res, next) {
        requestInfo = req.body;
    }
}

module.exports = new RegisterController();
