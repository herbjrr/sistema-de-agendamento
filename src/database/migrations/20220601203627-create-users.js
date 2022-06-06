'use strict';

module.exports = {
  // up: async (no video)
  up: async (queryInterface, Sequelize) => {
    // criação da tabela que receberá os dados do usuário
    return queryInterface.createTable('users', {
      id: {
        // Sequelize do tipo ...
        type: Sequelize.INTEGER,
        // não permite informações nulas
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  //down: async queryInterface => {} (no video)
  down: async (queryInterface) => {
    return queryInterface.dropTable('users')
  }
};
