const axios = require('axios');

const buscarFornecedorPorEstado = async (estado) => {
    return await axios.get(`http://192.168.99.100:31735/fornecedor/${estado}`);
}

const realizaPedido = async (itens) => {
    return await axios.post(`http://192.168.99.100:31735/pedido`, itens);
}

module.exports = { buscarFornecedorPorEstado, realizaPedido }