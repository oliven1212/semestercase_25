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
        static async pictureUpload({
            id,
            taskId,
            fileName,
            beforeAfter,
            productImage
        }){
            const pictures = await Picture.create({
                //id: taskData.id
                taskId: taskData.taskId,
                fileName: taskData.fileName,
                beforeAfter: taskData.beforeAfter,
                productImage: taskData.productImage
            });
             return pictures;
        }
        static associate(models) {
            Picture.belongsTo(models.Task, {foreignKey: "taskId"});
        }
        
    }

    Picture.init({
        taskId: DataTypes.INTEGER,
        filename: DataTypes.STRING,
        beforeAfter: DataTypes.BOOLEAN,
        productImage: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Picture',
    });
    return Picture;
};