const express = require('express');

const CompraController = require('./controllers/compraController');

const routes = express.Router();


routes.post('/compra', CompraController.realizaCompra)
routes.get('/compra/:id', CompraController.realizaCompra)

module.exports = routes;