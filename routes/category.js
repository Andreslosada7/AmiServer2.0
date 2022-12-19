const { Router } = require("express");
const CategoryRouter = Router();

const CategoryController = require("../controllers/category.controller");

CategoryRouter.post("/", CategoryController.createCategory);
CategoryRouter.get("/", CategoryController.getAllCategories);
CategoryRouter.get("/:id", CategoryController.getCategory);
CategoryRouter.put("/:id", CategoryController.updateCategory);
CategoryRouter.delete("/:id", CategoryController.deleteCategory);

module.exports = CategoryRouter;
