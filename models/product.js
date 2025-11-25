'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */

        static async updateProduct({id,name,unitId})
        {
            const originalProduct = await Product.findByPk(id, { raw: true });
            const Name = name || originalProduct.name;
            const UnitId = unitId || originalProduct.unitId;

            const product = await Product.update(
                {
                    name: `${Name}`,
                    unitId: `${UnitId}`,
                },
                {
                where: { id: id },
                },
            );
            return product;
        }



        static associate(models) {
            Product.belongsTo(models.Unit, {foreignKey: "unitId",});
            Product.belongsToMany(models.Task, {through: models.ProductTask, foreignKey: 'productId'});
        }
    }

    Product.init({
        name: DataTypes.STRING,
        unitId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};