const CategoryModel = require("../models/category.model");

CategoryController = {};

/*CRUD Methods*/

//Create
CategoryController.createCategory = async (req, res) => {
  try {
    await CategoryModel.create(req.body);
    res.json({
      message: "¡Categoria creado exitosamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Read All
CategoryController.getAllCategories = async (req, res) => {
  try {
    const Categories = await CategoryModel.findAll();
    res.json(Categories);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Read one
CategoryController.getCategory = async (req, res) => {
  try {
    const Category = await CategoryModel.findAll({
      where: {
        id_categories: req.params.id,
      },
    });
    res.json(Category[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Update
CategoryController.updateCategory = async (req, res) => {
  try {
    await CategoryModel.update(req.body, {
      where: {
        id_categories: req.params.id,
      },
    });
    res.json({
      message: "¡Categoria actualizada exitosamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Delete

CategoryController.deleteCategory = async (req, res) => {
  try {
    await CategoryModel.destroy({
      where: {
        id_categories: req.params.id,
      },
    });
    res.json({
      message: "¡Categoria eliminada exitosamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = CategoryController;
