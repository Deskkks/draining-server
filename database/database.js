const Sequelize = require ('sequelize')

const config = require ('../config/config.js')

const sequelize = new Sequelize (
    config.development.name,
    config.development.user,
    config.development.password,
    {
        host: config.development.host,
        dialect: config.development.dialect
    }
);

module.exports = sequelize;