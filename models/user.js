'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static async getAllUserIds() {
            const allUsers = await User.findAll({
                attributes: ['id'],
                raw: true
            });
            return allUsers.map(user => user.id);
        }

        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */

        static associate(models) {
            // define association here
            User.belongsTo(models.Role, {foreignKey: "roleId",});
            User.belongsTo(models.City, {foreignKey: "cityCode",});
            User.hasMany(models.Task, {foreignKey: 'userId'})
            User.belongsToMany(models.Gasstation, {through: models.GasstationUser, foreignKey: 'userId'});
        }
    }

    User.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        roleId: DataTypes.INTEGER,
        password: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};