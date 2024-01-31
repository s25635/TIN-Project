const { Sequelize } = require('sequelize');
const config = require('./../../config/config');

const sequelize = new Sequelize(
    config.database.name,
    config.database.username,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect,
        logging: false,
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
