"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      City.hasMany(models.Gasstation, { foreignKey: "cityCode" });
      City.hasMany(models.User, { foreignKey: "cityCode" });
    }
  }

  City.init(
    {
      zipCode: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "City",
    },
  );
  return City;
};
