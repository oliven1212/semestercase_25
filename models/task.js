'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Task.hasMany(models.Picture, { foreignKey: 'taskId' });
      models.Picture.belongsTo(models.Task);
      models.Task.belongsToMany(models.Product, { through: 'ProductTasks' });
    }
  }
  Task.init({
    userId: DataTypes.INTEGER,
    gasstationId: DataTypes.INTEGER,
    startTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};