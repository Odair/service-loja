const { Model, DataTypes } = require('sequelize')

class Compra extends Model {
    static init(sequelize) {
        super.init({
            idPedido: DataTypes.INTEGER,
            tempoDePreparo: DataTypes.INTEGER,
            enderecoDestino: DataTypes.TEXT,
            dataParaEntrega: DataTypes.DATE,
            voucher: DataTypes.INTEGER,
            state: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = Compra;