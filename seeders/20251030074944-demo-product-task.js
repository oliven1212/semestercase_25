'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('ProductTasks', [{
        productId: 1,
        taskId: 1,
        amount: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
          { productId: 1, taskId: 2, amount: 2, createdAt: new Date(), updatedAt: new Date() },
          { productId: 1, taskId: 3, amount: 4, createdAt: new Date(), updatedAt: new Date() },
          { productId: 1, taskId: 4, amount: 1, createdAt: new Date(), updatedAt: new Date() },
          { productId: 2, taskId: 1, amount: 2, createdAt: new Date(), updatedAt: new Date() },
          { productId: 2, taskId: 2, amount: 5, createdAt: new Date(), updatedAt: new Date() },
          { productId: 2, taskId: 3, amount: 1, createdAt: new Date(), updatedAt: new Date() },
          { productId: 2, taskId: 4, amount: 3, createdAt: new Date(), updatedAt: new Date() },
          { productId: 3, taskId: 1, amount: 4, createdAt: new Date(), updatedAt: new Date() },
          { productId: 3, taskId: 2, amount: 2, createdAt: new Date(), updatedAt: new Date() },
          { productId: 3, taskId: 3, amount: 3, createdAt: new Date(), updatedAt: new Date() },
          { productId: 3, taskId: 4, amount: 5, createdAt: new Date(), updatedAt: new Date() },
          { productId: 4, taskId: 1, amount: 1, createdAt: new Date(), updatedAt: new Date() },
          { productId: 4, taskId: 2, amount: 4, createdAt: new Date(), updatedAt: new Date() },
          { productId: 4, taskId: 3, amount: 2, createdAt: new Date(), updatedAt: new Date() },
          { productId: 4, taskId: 4, amount: 5, createdAt: new Date(), updatedAt: new Date() },
          { productId: 5, taskId: 1, amount: 2, createdAt: new Date(), updatedAt: new Date() },
          { productId: 5, taskId: 2, amount: 1, createdAt: new Date(), updatedAt: new Date() },
          { productId: 5, taskId: 3, amount: 3, createdAt: new Date(), updatedAt: new Date() },
          { productId: 5, taskId: 4, amount: 5, createdAt: new Date(), updatedAt: new Date() },
          { productId: 6, taskId: 1, amount: 4, createdAt: new Date(), updatedAt: new Date() },
          { productId: 6, taskId: 2, amount: 3, createdAt: new Date(), updatedAt: new Date() },
          { productId: 6, taskId: 3, amount: 1, createdAt: new Date(), updatedAt: new Date() },
          { productId: 6, taskId: 4, amount: 2, createdAt: new Date(), updatedAt: new Date() },
          { productId: 7, taskId: 1, amount: 5, createdAt: new Date(), updatedAt: new Date() },
          { productId: 7, taskId: 2, amount: 3, createdAt: new Date(), updatedAt: new Date() },
          { productId: 7, taskId: 3, amount: 2, createdAt: new Date(), updatedAt: new Date() },
          { productId: 7, taskId: 4, amount: 1, createdAt: new Date(), updatedAt: new Date() },
          { productId: 8, taskId: 1, amount: 4, createdAt: new Date(), updatedAt: new Date() },
          { productId: 8, taskId: 2, amount: 5, createdAt: new Date(), updatedAt: new Date() },
          { productId: 8, taskId: 3, amount: 1, createdAt: new Date(), updatedAt: new Date() },
          { productId: 8, taskId: 4, amount: 3, createdAt: new Date(), updatedAt: new Date() },
          { productId: 9, taskId: 1, amount: 2, createdAt: new Date(), updatedAt: new Date() },
          { productId: 9, taskId: 2, amount: 3, createdAt: new Date(), updatedAt: new Date() },
          { productId: 9, taskId: 3, amount: 5, createdAt: new Date(), updatedAt: new Date() },
          { productId: 9, taskId: 4, amount: 1, createdAt: new Date(), updatedAt: new Date() },
          { productId: 10, taskId: 1, amount: 3, createdAt: new Date(), updatedAt: new Date() },
          { productId: 10, taskId: 2, amount: 2, createdAt: new Date(), updatedAt: new Date() },
          { productId: 10, taskId: 3, amount: 4, createdAt: new Date(), updatedAt: new Date() },
          { productId: 10, taskId: 4, amount: 1, createdAt: new Date(), updatedAt: new Date() },
          { productId: 11, taskId: 1, amount: 5, createdAt: new Date(), updatedAt: new Date() },
          { productId: 11, taskId: 2, amount: 2, createdAt: new Date(), updatedAt: new Date() },
          { productId: 11, taskId: 3, amount: 3, createdAt: new Date(), updatedAt: new Date() },
          { productId: 11, taskId: 4, amount: 4, createdAt: new Date(), updatedAt: new Date() },
          { productId: 12, taskId: 1, amount: 1, createdAt: new Date(), updatedAt: new Date() },
          { productId: 12, taskId: 2, amount: 3, createdAt: new Date(), updatedAt: new Date() },
          { productId: 12, taskId: 3, amount: 2, createdAt: new Date(), updatedAt: new Date() },
          { productId: 12, taskId: 4, amount: 5, createdAt: new Date(), updatedAt: new Date() },
          { productId: 13, taskId: 1, amount: 4, createdAt: new Date(), updatedAt: new Date() },
          { productId: 13, taskId: 2, amount: 1, createdAt: new Date(), updatedAt: new Date() },
        { productId: 13, taskId: 3, amount: 3, createdAt: new Date(), updatedAt: new Date() },
        { productId: 13, taskId: 4, amount: 5, createdAt: new Date(), updatedAt: new Date() },
        { productId: 14, taskId: 1, amount: 2, createdAt: new Date(), updatedAt: new Date() },
        { productId: 14, taskId: 2, amount: 4, createdAt: new Date(), updatedAt: new Date() },
        { productId: 14, taskId: 3, amount: 1, createdAt: new Date(), updatedAt: new Date() },
        { productId: 14, taskId: 4, amount: 3, createdAt: new Date(), updatedAt: new Date() },
        { productId: 15, taskId: 1, amount: 5, createdAt: new Date(), updatedAt: new Date() },
        { productId: 15, taskId: 2, amount: 2, createdAt: new Date(), updatedAt: new Date() },
        { productId: 15, taskId: 3, amount: 4, createdAt: new Date(), updatedAt: new Date() },
        { productId: 15, taskId: 4, amount: 1, createdAt: new Date(), updatedAt: new Date() },
        { productId: 16, taskId: 1, amount: 3, createdAt: new Date(), updatedAt: new Date() },
        { productId: 16, taskId: 2, amount: 5, createdAt: new Date(), updatedAt: new Date() },
        { productId: 16, taskId: 3, amount: 2, createdAt: new Date(), updatedAt: new Date() },
        { productId: 16, taskId: 4, amount: 4, createdAt: new Date(), updatedAt: new Date() },
        { productId: 17, taskId: 1, amount: 1, createdAt: new Date(), updatedAt: new Date() },
        { productId: 17, taskId: 2, amount: 3, createdAt: new Date(), updatedAt: new Date() },
        { productId: 17, taskId: 3, amount: 5, createdAt: new Date(), updatedAt: new Date() },
        { productId: 17, taskId: 4, amount: 2, createdAt: new Date(), updatedAt: new Date() },
        { productId: 18, taskId: 1, amount: 4, createdAt: new Date(), updatedAt: new Date() },
        { productId: 18, taskId: 2, amount: 1, createdAt: new Date(), updatedAt: new Date() },
        { productId: 18, taskId: 3, amount: 2, createdAt: new Date(), updatedAt: new Date() },
        { productId: 18, taskId: 4, amount: 5, createdAt: new Date(), updatedAt: new Date() },
        { productId: 19, taskId: 1, amount: 2, createdAt: new Date(), updatedAt: new Date() },
        { productId: 19, taskId: 2, amount: 4, createdAt: new Date(), updatedAt: new Date() },
        { productId: 19, taskId: 3, amount: 1, createdAt: new Date(), updatedAt: new Date() },
        { productId: 19, taskId: 4, amount: 3, createdAt: new Date(), updatedAt: new Date() },
        { productId: 20, taskId: 1, amount: 5, createdAt: new Date(), updatedAt: new Date() },
        { productId: 20, taskId: 2, amount: 2, createdAt: new Date(), updatedAt: new Date() },
        { productId: 20, taskId: 3, amount: 3, createdAt: new Date(), updatedAt: new Date() },
        { productId: 20, taskId: 4, amount: 4, createdAt: new Date(), updatedAt: new Date() },
        { productId: 21, taskId: 1, amount: 1, createdAt: new Date(), updatedAt: new Date() },
        { productId: 21, taskId: 2, amount: 3, createdAt: new Date(), updatedAt: new Date() },
        { productId: 21, taskId: 3, amount: 5, createdAt: new Date(), updatedAt: new Date() },
        { productId: 21, taskId: 4, amount: 2, createdAt: new Date(), updatedAt: new Date() },
        { productId: 22, taskId: 1, amount: 4, createdAt: new Date(), updatedAt: new Date() },
        { productId: 22, taskId: 2, amount: 2, createdAt: new Date(), updatedAt: new Date() },
        { productId: 22, taskId: 3, amount: 3, createdAt: new Date(), updatedAt: new Date() },
        { productId: 22, taskId: 4, amount: 1, createdAt: new Date(), updatedAt: new Date() },
        { productId: 23, taskId: 1, amount: 5, createdAt: new Date(), updatedAt: new Date() },
        { productId: 23, taskId: 2, amount: 3, createdAt: new Date(), updatedAt: new Date() },
        { productId: 23, taskId: 3, amount: 2, createdAt: new Date(), updatedAt: new Date() },
        { productId: 23, taskId: 4, amount: 4, createdAt: new Date(), updatedAt: new Date() },
        { productId: 24, taskId: 1, amount: 1, createdAt: new Date(), updatedAt: new Date() },
        { productId: 24, taskId: 2, amount: 2, createdAt: new Date(), updatedAt: new Date() },
        { productId: 24, taskId: 3, amount: 4, createdAt: new Date(), updatedAt: new Date() },
        { productId: 24, taskId: 4, amount: 3, createdAt: new Date(), updatedAt: new Date() },
        { productId: 25, taskId: 1, amount: 3, createdAt: new Date(), updatedAt: new Date() },
        { productId: 25, taskId: 2, amount: 5, createdAt: new Date(), updatedAt: new Date() },
        { productId: 25, taskId: 3, amount: 1, createdAt: new Date(), updatedAt: new Date() },
        { productId: 25, taskId: 4, amount: 2, createdAt: new Date(), updatedAt: new Date() },
        { productId: 26, taskId: 1, amount: 4, createdAt: new Date(), updatedAt: new Date() },
        { productId: 26, taskId: 2, amount: 2, createdAt: new Date(), updatedAt: new Date() },
        { productId: 26, taskId: 3, amount: 3, createdAt: new Date(), updatedAt: new Date() },
        { productId: 26, taskId: 4, amount: 5, createdAt: new Date(), updatedAt: new Date() }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductTasks', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
