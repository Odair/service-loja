const axios = require('axios');

const buscarFornecedorPorEstado = async (estado) => {
    return await axios.get(`${process.env.URL_API}fornecedor/info/${estado}`);
}

const realizaPedido = async (itens) => {
    return await axios.post(`${process.env.URL_API}fornecedor/pedido`, itens);
}

module.exports = { buscarFornecedorPorEstado, realizaPedido }