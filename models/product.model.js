const db = require("../database/database");
const { DataTypes } = require("sequelize");

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
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = ProductModel;
