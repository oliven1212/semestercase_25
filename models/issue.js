"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Issue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Issue.belongsTo(models.Task, {
        foreignKey: "taskId",
        onDelete: "SET NULL",
      });
      Issue.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "SET NULL",
      });
      // define association here
    }
  }
  Issue.init(
    {
      Id: DataTypes.INTEGER,
      taskId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Issue",
    },
  );
  return Issue;
};
