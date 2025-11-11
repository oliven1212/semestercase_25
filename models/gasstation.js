"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Gasstation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static async updateGasstation({id,branchId,address,contactEmail,contactPhone,frontSpace}) {
            const originalGasstation = await Gasstation.findByPk(id,{raw: true});
            const BranchId = branchId || originalGasstation.branchId; 
            const Address = address || originalGasstation.address;
            const ContactEmail = contactEmail || originalGasstation.contactEmail;
            const ContactPhone = contactPhone || originalGasstation.contactPhone;
            const FrontSpace = frontSpace || originalGasstation.frontSpace;
           
            const gasstation = await Gasstation.update({
                branchId: BranchId,
                address: `${Address}`,
                contactEmail: `${ContactEmail}`,
                contactPhone: `${ContactPhone}`,
                frontSpace: parseInt(FrontSpace),
           }, {
                where: { id: id },
           });
            return gasstation;
        }
        static associate(models) {
            // define association here
            Gasstation.belongsTo(models.Branch, {foreignKey: "branchId",});
            Gasstation.belongsTo(models.City, {foreignKey: "cityCode",});
            Gasstation.hasMany(models.Task, {foreignKey: "gasstationId"});
            Gasstation.belongsToMany(models.User, {through: models.GasstationUser, foreignKey: "gasstationId"});
        }
    }

    Gasstation.init(
        {
            branchId: DataTypes.INTEGER,
            address: DataTypes.STRING,
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
