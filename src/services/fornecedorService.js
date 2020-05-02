const axios = require('axios');

const buscarFornecedorPorEstado = async (estado) => {
    return await axios.get(`http://fornecedor/${estado}`);
}

const realizaPedido = async (itens) => {
    return await axios.post(`http://pedido`, itens);
}

module.exports = { buscarFornecedorPorEstado, realizaPedido }