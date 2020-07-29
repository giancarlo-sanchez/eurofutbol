'use strict';
const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('abc123');
}


module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Users', [

     {
       email: 'giancarlo@sanchez.example',
       name: 'Giancarlo Sanchez',
       hashedPassword: createPassword(),
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       email: 'user@one.example',
       name: 'Cristiano Ronaldo Jr',
       hashedPassword: createPassword(),
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      email:'user@two.example',
      name: 'Messi Goat Jr',
      hashedPassword: createPassword(),
      createdAt: new Date(),
      updatedAt: new Date(),
     },
  ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Users', null, {});

  }
};
