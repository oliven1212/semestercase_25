'use strict';
/*database pictures skal være ens hos alle, så billednavn er det samme i vores mapper også. SÅ ingen random værdier*/

const { v4: uuidv4 } = require('uuid');

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


      // Create an array of entries to insert
      const picturesArray = [];

      // Example: insert the same UUID twice using a loop
      for (let i = 1; i < 100; i++) {
          const pictureId = uuidv4();
          picturesArray.push({
              id: pictureId,              // same UUID for both
              taskId: Math.floor(Math.random() * 99)+1,
              filename: pictureId,        // also the same filename
              beforeAfter: Math.round(Math.random()),       // 0 or 1
              productImage: Math.round(Math.random()),       // 0 or 1
              createdAt: new Date(),
              updatedAt: new Date(),
          });
      }
    await queryInterface.bulkInsert('Pictures', picturesArray, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pictures', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
