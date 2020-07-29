'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FavoriteTeams', {
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
        allowNull: false
      },
      teamId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      teamName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      teamImageUrl: {
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
    return queryInterface.dropTable('FavoriteTeams');
  }
};
