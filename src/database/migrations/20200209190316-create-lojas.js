'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Compra', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      idPedido:{
        type: Sequelize.INTEGER
      },
      tempoDePreparo:{
        type: Sequelize.INTEGER
      },
      enderecoDestino:{
        type: Sequelize.TEXT
      },
      dataParaEntrega:{
        type: Sequelize.DATE
      },
      voucher:{
        type: Sequelize.INTEGER
      },
      state:{
        type: Sequelize.INTEGER
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Compra')
  }
};
