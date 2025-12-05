'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tasksArray = [];

    // Example: insert the same UUID twice using a loop
    for (let i = 1; i <= 50; i++) {
      for (let y = 6; y <= 20; y++) {

        tasksArray.push({
          userId: y,
          gasstationId: i,
          taskLink: 1,
          startTime: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }
    await queryInterface.bulkInsert('Tasks', tasksArray, {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Tasks', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
