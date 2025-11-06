'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Cities', [
        {
            zipCode: 2000,
            name: 'Frederiksberg',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            zipCode: 4000,
            name: 'Roskilde',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            zipCode: 5000,
            name: 'Odense C',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            zipCode: 8000,
            name: 'Aarhus C',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            zipCode: 9000,
            name: 'Aalborg',
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
