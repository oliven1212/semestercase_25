"use strict";
const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static async getAllUserIds() {
      const allUsers = await User.findAll({
        attributes: ["id"],
        raw: true,
      });
      return allUsers.map((user) => user.id);
    }

    static async updateUser({
      id,
      firstName,
      lastName,
      email,
      phone,
      address,
      cityCode,
    }) {

      const originalUser = await User.findByPk(id, { raw: true });
      const FirstName = firstName || originalUser.firstName;
      const LastName = lastName || originalUser.lastName;
      const Email = email || originalUser.email;
      const Phone = phone || originalUser.phone;
      const Address = address || originalUser.address;
      const CityCode = cityCode || originalUser.cityCode;

      const user = await User.update(
        {
          firstName: `${FirstName}`,
          lastName: `${LastName}`,
          email: `${Email}`,
          phone: `${Phone}`,
          address: `${Address}`,
          cityCode: parseInt(CityCode),
        },
        {
          where: { id: id },
        },
      );

      return user;
    }

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      User.belongsTo(models.Role, { foreignKey: "roleId" });
      User.belongsTo(models.City, { foreignKey: "cityCode" });
      User.hasMany(models.Task, { foreignKey: "userId", onDelete: "SET NULL" });
      User.belongsToMany(models.Gasstation, {
        through: models.GasstationUser,
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }

  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: { exclude: ["password"] },
      },
    },
  );
  User.beforeBulkCreate(async (users) => {
    for (const user of users) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  });
  return User;
};
