const { Router } = require("express");
const paymentMethodRouter = Router();

const PaymentMethodController = require("../controllers/paymentMethod.controller");

paymentMethodRouter.post("/", PaymentMethodController.createPaymentMethod);
paymentMethodRouter.get("/", PaymentMethodController.getAllPaymentMethods);
paymentMethodRouter.get("/:id", PaymentMethodController.getPaymentMethod);
paymentMethodRouter.put("/:id", PaymentMethodController.updatePaymentMethod);
paymentMethodRouter.delete("/:id", PaymentMethodController.deletePaymentMethod);

module.exports = paymentMethodRouter;
