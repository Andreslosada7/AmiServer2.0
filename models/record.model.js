const { DataTypes } = require("sequelize");
const db = require("../database/database");

const PaymentMethodModel = require("../models/paymentMethod.model");

const RecordModel = db.define("records", {
  id_record: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  discount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  paymentMethodIdPaymentMethods: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

RecordModel.belongsTo(PaymentMethodModel, { foreingkey: "FK_records_payment_methods" });
PaymentMethodModel.hasMany(RecordModel, { foreingkey: "FK_records_payment_methods" });

module.exports = RecordModel;
