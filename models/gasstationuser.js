'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GasstationUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GasstationUser.init({
    userId: DataTypes.INTEGER,
    gasstationId: DataTypes.INTEGER,
    isOwner: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'GasstationUser',
  });
  return GasstationUser;
};