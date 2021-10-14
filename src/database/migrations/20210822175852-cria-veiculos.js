'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('veiculos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id',
        }
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      placa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tamanho_tanque: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }




    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('veiculos');

  }
};
