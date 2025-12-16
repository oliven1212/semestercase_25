"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Task extends Model {
    static async updateTask({
      id,
      userId,
      gasstationId,
      taskLink,
      startTime,
    }) {
      const originalTask = await Task.findByPk(id, { raw: true });
      const UserId = userId || originalTask.userId;
      const GasstationId = gasstationId || originalTask.gasstationId;
      const TaskLink = taskLink || originalTask.taskLink;
      const StartTime = startTime || originalTask.startTime;

      const task = await Task.update(
        {
          userId: `${UserId}`,
          gasstationId: `${GasstationId}`,
          taskLink: `${TaskLink}`,
          startTime: `${StartTime}`,
        },
        {
          where: { id: id },
        },
      );

      return task;
    }


        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Task.hasMany(models.Picture, {foreignKey: "taskId"});
            Task.belongsTo(models.Gasstation, {foreignKey: "gasstationId"});
            Task.belongsTo(models.User, {foreignKey: "userId",onDelete: "SET NULL",});
            Task.belongsToMany(models.Product, {through: models.ProductTask, foreignKey: 'taskId'});
        }
    }

    Task.init(
        {
            userId: DataTypes.INTEGER,
            gasstationId: DataTypes.INTEGER,
            taskLink: DataTypes.BOOLEAN,
            startTime: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Task",
            defaultScope: {
                attributes: { exclude: ['createdAt','updatedAt'] },
            }
        },
    );
    return Task;
};
