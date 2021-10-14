'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        notNull: true,
      },
      cpf: {
        type: Sequelize.STRING,
        notNull: true,
      },
      rg: {
        type: Sequelize.STRING,
        notNull: true,
      },
      email: {
        type: Sequelize.STRING,
        notNull: true,
      },
      telefone: {
        type: Sequelize.STRING,
        notNull: true,
      },
      endereco: {
        type: Sequelize.STRING,
        notNull: true,
      },
      data_nasc: {
        type: Sequelize.DATEONLY,
        notNull: true,
      },
      estado: {
        type: Sequelize.STRING,
        notNull: true,
      },
      cidade: {
        type: Sequelize.STRING,
        notNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        notNull: true,
        //defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        notNull: true,
        //defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      }


    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};
