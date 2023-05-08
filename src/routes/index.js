const siteRouter = require('./site');
const productRouter = require('./product');
const contactRouter = require('./contact');
const aboutRouter = require('./about');
const loginRouter = require('./login');
const registerRouter = require('./register');
const loginMiddleware = require('../app/middlewares/loginMiddleware');

function route(app) {
    app.use('/logout', (req, res, next) => {
        req.session.loggedIn = false;
        req.session.user = null;
        res.redirect('/');
    });
    app.use('/register', registerRouter);
    app.use('/login', loginRouter);
    app.use('/about', aboutRouter);
    app.use('/contact', contactRouter);
    app.use('/product', productRouter);
    app.use('/', siteRouter);
}

module.exports = route;
