"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Issues",
      [
        {
          taskId: 1,
          description: "Description for issue 1",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskId: 2,
          description: "Description for issue 2",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Issues", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
