const { Sequelize } = require('sequelize');
const { dbHost, dbUsername, dbPassword, dbName } = require('./config');
const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
    host: dbHost,
    dialect: 'mysql'
});
module.exports = {
    sequelize
};