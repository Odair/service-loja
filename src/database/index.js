const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Compra = require('../models/compra');

const connection = new Sequelize(dbConfig);

Compra.init(connection);

module.exports = connection;