"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Gasstation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Gasstation.belongsToMany(models.User, {
        through: "GasstationUsers",
      });
      models.Gasstation.belongsTo(models.Branch, {
        foreignKey: "branchId",
        as: "branch",
      });
      Gasstation.hasMany(models.Task, { foreignKey: "gasstationId" });
    }
  }
  Gasstation.init(
    {
      branchId: DataTypes.INTEGER,
      location: DataTypes.STRING,
      contactEmail: DataTypes.STRING,
      contactPhone: DataTypes.STRING,
      frontSpace: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Gasstation",
    },
  );
  return Gasstation;
};
