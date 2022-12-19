const db = require("../database/database");
const { DataTypes } = require("sequelize");

const CategoryModel = db.define("categories", {
  id_categories: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
});

module.exports = CategoryModel;
