const RecordProductModel = require("../models/recordsproducts.model");

RecordProductController = {};

/*CRUD Methods*/

//Create
RecordProductController.createRecordProduct = async (req, res) => {
    try {
        await RecordProductModel.create(req.body)
        res.json({
            "message": "¡Producto de registro creado exitosamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Read All
RecordProductController.getAllRecordProducts = async (req, res) => {
  try {
    const recordProducts = await RecordProductModel.findAll();
    res.json(recordProducts);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Read one
RecordProductController.getRecordProduct = async (req, res) => {
    try {
        const recordProduct = await RecordProductModel.findAll({
            where: {
                id_product: req.params.id
            }
        });
        res.json(recordProduct[0]);
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Update
RecordProductController.updateRecordProduct = async (req, res) => {
    try {
        await RecordProductModel.update(req.body, {
            where: {
                id_product: req.params.id
            }
        });
        res.json({
            "message": "¡Producto de registro actualizado exitosamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Delete

RecordProductController.deleteRecordProduct = async (req, res) => {
    try {
        await RecordProductModel.destroy({
            where: {
                id_product: req.params.id
            }
        })
        res.json({
            "message": "¡Producto de registro eliminado exitosamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = RecordProductController;
