'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductTasks', {
      /*id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },*/
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        
      },
      taskId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tasks',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        
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
    await queryInterface.addConstraint('ProductTasks', {
      fields: ['productId', 'taskId'],
      type: 'primary key',
      name: 'producttask_pkey'

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductTasks');
  }
};