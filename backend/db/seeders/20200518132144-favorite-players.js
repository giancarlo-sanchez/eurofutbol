'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('FavoritePlayers', [
        {userId: 1, playerId: 30642, playerName: 'Manuel Neuer', imageUrl: 'https://cdn.sportmonks.com/images/soccer/players/18/30642.png', teamName: 'Bayern München', createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, playerId: 31000, playerName: 'Robert Lewandowski',  imageUrl: 'https://cdn.sportmonks.com/images/soccer/players/24/31000.png', teamName: 'Bayern München',createdAt: new Date(), updatedAt: new Date()},
        {userId: 3, playerId: 251, playerName: 'Gareth Bale', imageUrl: 'https://cdn.sportmonks.com/images/soccer/players/27/251.png', teamName: 'Real Madrid',createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, playerId: 96091, playerName: 'James Rodríguez', imageUrl: 'https://cdn.sportmonks.com/images/soccer/players/27/96091.png', teamName: 'Real Madrid',createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, playerId: 1389, playerName: 'Sadio Mané', imageUrl: 'https://cdn.sportmonks.com/images/soccer/players/13/1389.png', teamName: 'Liverpool',createdAt: new Date(), updatedAt: new Date()},
        {userId: 3, playerId: 4125, playerName: 'Mohamed Salah', imageUrl: 'https://cdn.sportmonks.com/images/soccer/players/29/4125.png', teamName: 'Liverpool',createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('FavoritePlayers', null, {});

  }
};
