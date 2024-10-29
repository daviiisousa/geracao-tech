'use strict';
const {
  Model,
  HasMany
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  Product.associate = (models) => {
    Product.belongsToMany(models.Catogory, {
      foreignKey: 'productId',
      as: 'category'
    })
  }
  return Product;
};