'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GasstationUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
          references: {
              model: 'Users',
              key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
      },
      gasstationId: {
        type: Sequelize.INTEGER,
          references: {
              model: 'Gasstations',
              key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',

      },
      isOwner: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GasstationUsers');
  }
};