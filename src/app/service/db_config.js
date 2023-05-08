const mysql = require('mysql2');
const Sequelize = require('sequelize');

// create the connection to database

const sequelize = new Sequelize('test', 'root', '312002', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Database Ready');
    })
    .catch((err) => {
        console.log('Can not connect to database', err);
    });

module.exports = sequelize;
