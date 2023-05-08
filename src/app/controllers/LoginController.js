const { response } = require('express');
const User = require('../model/User');
const userService = require('../databaseQueries/userService');

class LoginController {
    index(req, res, next) {
        res.render('login');
    }

    login(req, res, next) {
        const userName = req.body.username;
        const password = req.body.password;

        const authenResult = userService.authenUserAccount(userName, password);

        if (authenResult.found === true) {
            const user = {
                name: authenResult.user.userName,
            };
            req.session.user = user;
            req.session.loggedIn = true;
            res.redirect('/');
        } else {
            res.redirect('/login?error=Invalid%20username%20or%20password.');
        }
    }
}

module.exports = new LoginController();
