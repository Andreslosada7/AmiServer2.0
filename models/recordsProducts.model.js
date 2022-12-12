const { DataTypes } = require("sequelize");
const db = require("../database/database");
const ProductModel = require("../models/product.model");
const RecordModel = require("../models/record.model");

const RecordProductModel = db.define("records_products", {
  record_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  units: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  discount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

//Relations with products
RecordProductModel.belongsTo(ProductModel, {
  foreingkey: "FK_records_products_products",
});
ProductModel.hasMany(RecordProductModel, {
  foreingkey: "FK_records_products_products",
});

//Relations with records
RecordProductModel.belongsTo(RecordModel, {
  foreingkey: "FK_records_products_records",
});
RecordModel.hasMany(RecordProductModel, {
  foreingkey: "FK_records_products_records",
});

module.exports = RecordProductModel;
