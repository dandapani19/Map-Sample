'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
      username: 'John',
      lag: '11.9418994',
      lon:'79.793706',
      cab_id:'1',
      in_raids:'false',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Make',
      lag: '11.919737',
      lon:'79.796959',
      cab_id:'2',
      in_raids:'false',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Joss',
      lag: '11.9418994',
      lon:'79.793706',
      cab_id:'1',
      in_raids:'false',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'takliaa',
      lag: '11.9418994',
      lon:'79.793706',
      cab_id:'1',
      in_raids:'false',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'John',
      lag: '11.9418994',
      lon:'79.793706',
      cab_id:'1',
      in_raids:'false',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
