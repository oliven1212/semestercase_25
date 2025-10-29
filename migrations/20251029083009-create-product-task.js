'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductTasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER,
          references: {
              model: 'Products',
              key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
      },
      taskId: {
        type: Sequelize.INTEGER,
          references: {
              model: 'Tasks',
              key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
      },
      amount: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('ProductTasks');
  }
};