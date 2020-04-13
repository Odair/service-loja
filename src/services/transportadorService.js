const axios = require('axios');

const reservaEntrega = async (pedido) => {
    return await axios.post(`${process.env.URL_API}transportador/entrega`, pedido);
}

module.exports = { reservaEntrega }