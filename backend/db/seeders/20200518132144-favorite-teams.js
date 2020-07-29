'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('FavoriteTeams', [
        {userId: 1, teamId: 83, teamName: 'Barcelona', teamImageUrl: 'https://cdn.sportmonks.com/images//soccer/teams/19/83.png', createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, teamId: 6, teamName: 'Tottenham Hotspur',  teamImageUrl: 'https://cdn.sportmonks.com/images//soccer/teams/6/6.png', createdAt: new Date(), updatedAt: new Date()},
        {userId: 3, teamId: 8, teamName: 'Liverpool', teamImageUrl: 'https://cdn.sportmonks.com/images//soccer/teams/8/8.png', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, teamId: 9, teamName: 'Manchester City', teamImageUrl: 'https://cdn.sportmonks.com/images//soccer/teams/9/9.png', createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, teamId: 18, teamName: 'Chelsea', teamImageUrl: 'https://cdn.sportmonks.com/images//soccer/teams/18/18.png', createdAt: new Date(), updatedAt: new Date()},
        {userId: 3, teamId: 597, teamName: 'Napoli', teamImageUrl: 'https://cdn.sportmonks.com/images//soccer/teams/21/597.png', createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('FavoriteTeams', null, {});

  }
};
