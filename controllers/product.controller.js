const CategoryModel = require("../models/category.model");
const ProductModel = require("../models/product.model");
ProductController = {};

/*CRUD Methods*/

//Create
ProductController.createProduct = async (req, res) => {
  try {
    await ProductModel.create(req.body);
    res.json({
      message: "¡Producto creado exitosamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Read All
ProductController.getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.findAll({
      include: {
        model: CategoryModel,
      },
    });
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Read one
ProductController.getProduct = async (req, res) => {
  try {
    const product = await ProductModel.findAll({
      where: {
        id_product: req.params.id,
      },
    });
    res.json(product[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Update
ProductController.updateProduct = async (req, res) => {
  try {
    await ProductModel.update(req.body, {
      where: {
        id_product: req.params.id,
      },
    });
    res.json({
      message: "¡Producto actualizado exitosamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Delete

ProductController.deleteProduct = async (req, res) => {
  try {
    await ProductModel.destroy({
      where: {
        id_product: req.params.id,
      },
    });
    res.json({
      message: "¡Producto eliminado exitosamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = ProductController;
