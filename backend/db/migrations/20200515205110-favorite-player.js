'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FavoritePlayers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull:false
      },
      playerId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      playerName: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      teamName: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('FavoritePlayers');
  }
};
