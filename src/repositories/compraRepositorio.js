const Compra = require('../models/compra')

const criarCompra = async (compra) => {
    return await Compra.create(compra);
}

module.exports = { criarCompra }