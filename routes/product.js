const { Router } = require("express");
const productRouter = Router();

const ProductController = require("../controllers/product.controller");

productRouter.post("/", ProductController.createProduct);
productRouter.get("/", ProductController.getAllProducts);
productRouter.get("/:id", ProductController.getProduct);
productRouter.put("/:id", ProductController.updateProduct);
productRouter.delete("/:id", ProductController.deleteProduct);

module.exports = productRouter;
