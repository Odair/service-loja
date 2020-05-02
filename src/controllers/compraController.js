const compraRepositorio = require("../repositories/compraRepositorio");
const fornecedorServico = require("../services/fornecedorService");
const transportadorServico = require("../services/transportadorService");
const Compra = require("../models/compra");
const compraState = require("../models/compraState");

const realizaCompra = async (req, res) => {

    const compra = req.body;
    compra.state = compraState.RECEBIDO;
    //await compraRepositorio.criarCompra(compra);

    const infoFornecedor = await fornecedorServico.buscarFornecedorPorEstado("MG");
    const infoPedido = await fornecedorServico.realizaPedido(compra.itens);
    compra.state = compraState.PEDIDO_REALIZADO;
    compra.idPedido = infoPedido.idPedido;
    compra.tempoDePreparo = infoPedido.tempoDePreparo;
    await compraRepositorio.criarCompra(compra);


    return res.json({ "Acessou Controller": "ok" })

}

module.exports = { realizaCompra }