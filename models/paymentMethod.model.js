const db = require("../database/database");
const { DataTypes } = require("sequelize");

const PaymentMethodModel = db.define("payment_methods", {
  id_payment_methods: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = PaymentMethodModel;
