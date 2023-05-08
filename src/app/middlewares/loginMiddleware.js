module.exports = function LoginMiddleware(req, res, next) {
    if (req.session && req.session.loggedIn) {
        res.locals._loggedIn = req.session.loggedIn;
        res.locals._user = req.session.user;
    }

    next();
};
