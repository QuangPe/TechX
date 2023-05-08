const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
var methodOverride = require('method-override');
const session = require('express-session');
const route = require('./routes');
const loginMiddleware = require('./app/middlewares/loginMiddleware');


const app = express();
const port = 3000;

app.use(
    session({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: true,
    }),
);

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));
app.use(methodOverride('_method'));

// Log in middleware
app.use(loginMiddleware);
//template engine

app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {},
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views/'));

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
