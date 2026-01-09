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
        onDelete: "CASCADE",
      });
      // define association here
    }
  }
  Issue.init(
    {
      taskId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Issue",
    },
  );
  return Issue;
};
