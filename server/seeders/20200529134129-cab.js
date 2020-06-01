'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cabs', [
      {
      name: 'c1',
      lag: '11.9418994',
      lon:'79.793706',
      available:'true',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'c2',
      lag: '11.919737',
      lon:'79.796959',
      available:'true',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'c3',
      lag: '11.9418994',
      lon:'79.793706',
      available:'true',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'c4',
      lag: '11.9418814',
      lon:'79.793706',
      available:'true',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'c5',
      lag: '11.9418294',
      lon:'79.793406',
      available:'true',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cabs', null, {});
  }
};
