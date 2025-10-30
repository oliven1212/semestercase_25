'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tasksArray = [];

    // Example: insert the same UUID twice using a loop
    for (let i = 0; i < 50; i++) {
      for (let y = 0; y < 20; y++) {

        GasstationUsersArray.push({
          userId: y,
          gasstationId: i,
          startTime: new Date(),
        });
      }
    }
    await queryInterface.bulkInsert('tasks', tasksArray, {});

  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('tasks', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
