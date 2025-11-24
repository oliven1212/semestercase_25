'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async productUpload({
      productId,
      taskId,
      amount
    }){
      const products = await ProductTask.create({
        productId: taskData.productId,
        taskId: taskData.taskId,
        amount: taskData.amount
      })

    }
    static associate(models) {
      // define association here
    }
  }
  ProductTask.init({
    productId: DataTypes.INTEGER,
    taskId: DataTypes.INTEGER,
    amount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'ProductTask',
  });
  return ProductTask;
};