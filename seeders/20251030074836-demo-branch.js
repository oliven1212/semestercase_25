'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Branches', [
      {
        name: 'OK Plus',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Shell',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Circle K',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Uno X',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Q8',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Branches', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
