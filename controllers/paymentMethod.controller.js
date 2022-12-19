const PaymentMethodModel = require("../models/paymentMethod.model");

PaymentMethodController = {};

/*CRUD Methods*/

//Create
PaymentMethodController.createPaymentMethod = async (req, res) => {
  try {
    await PaymentMethodModel.create(req.body);
    res.json({
      message: "¡Medio de pago creado exitosamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Read All
PaymentMethodController.getAllPaymentMethods = async (req, res) => {
  try {
    const paymentMethods = await PaymentMethodModel.findAll();
    res.json(paymentMethods);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Read one
PaymentMethodController.getPaymentMethod = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethodModel.findAll({
      where: {
        id_payment_methods: req.params.id,
      },
    });
    res.json(paymentMethod[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Update
PaymentMethodController.updatePaymentMethod = async (req, res) => {
  try {
    await PaymentMethodModel.update(req.body, {
      where: {
        id_payment_methods: req.params.id,
      },
    });
    res.json({
      message: "¡Medio de pago actualizado exitosamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Delete

PaymentMethodController.deletePaymentMethod = async (req, res) => {
  try {
    await PaymentMethodModel.destroy({
      where: {
        id_payment_methods: req.params.id,
      },
    });
    res.json({
      message: "¡Medio de pago eliminado exitosamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = PaymentMethodController;
