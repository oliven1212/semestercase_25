'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const GasstationUsersArray = [];

    // Example: insert the same UUID twice using a loop
    for (let i = 0; i < 50; i++) {
      for (let y = 0; y < 20; y++) {

        GasstationUsersArray.push({

          userId: y,
          gasstationId: i,
          isOwner: Math.round(Math.random()),       // 0 or 1
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }
    await queryInterface.bulkInsert('GasstationUsers', GasstationUsersArray, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('GasstationUsers', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
