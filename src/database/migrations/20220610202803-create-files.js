'use strict';

module.exports = {
  // up: async (no video)
  up: async (queryInterface, Sequelize) => {
    // criação da tabela que receberá os dados do usuário
    return queryInterface.createTable('files', {
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
      path: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('files')
  }
};
