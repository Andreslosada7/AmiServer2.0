const db = require("../database/database");
const { DataTypes } = require("sequelize");
const CategoryModel = require("./category.model");

const ProductModel = db.define("products", {
  id_product: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  purchease_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sale_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  units: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

ProductModel.belongsTo(CategoryModel, { foreingkey: "FK_products_categories" });
CategoryModel.hasMany(ProductModel, { foreingkey: "FK_products_categories" });

module.exports = ProductModel;
