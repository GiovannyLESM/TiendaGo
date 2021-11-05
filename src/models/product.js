const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database');
class Product extends Model {};
Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
}, {
    sequelize,
    modelName: "product",
});
module.exports = { Product };