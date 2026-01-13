'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Issue extends Model {
    static associate(models) {
      Issue.belongsTo(models.Task, {
        foreignKey: "taskId",
        onDelete: "CASCADE",
      });
      Issue.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  Issue.init(
    {
      taskId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Issue',
      tableName: 'Issues',
    }
  );

  return Issue;
};