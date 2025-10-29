'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Picture.init({
    taskid: DataTypes.INTEGER,
    filename: DataTypes.STRING,
    beforeAfter: DataTypes.BOOLEAN,
    productImage: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};