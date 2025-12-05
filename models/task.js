"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Task extends Model {
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
