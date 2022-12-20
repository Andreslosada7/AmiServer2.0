const RecordModel = require("../models/record.model");
const PaymentMethodModel = require("../models/paymentMethod.model");

RecordController = {};

/*CRUD Methods*/

//Create
RecordController.createRecord = async (req, res) => {
  try {
    await RecordModel.create(req.body);
    res.json({
      message: "¡Registro creado exitosamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Read All
RecordController.getAllRecords = async (req, res) => {
  try {
    const Records = await RecordModel.findAll({
      include: {
        model: PaymentMethodModel,
      },
    });
    res.json(Records);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Read one
RecordController.getRecord = async (req, res) => {
  try {
    const record = await RecordModel.findAll({
      where: {
        id_record: req.params.id,
      },
    });
    res.json(record[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Update
RecordController.updateRecord = async (req, res) => {
  try {
    await RecordModel.update(req.body, {
      where: {
        id_record: req.params.id,
      },
    });
    res.json({
      message: "¡Registro actualizado exitosamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Delete

RecordController.deleteRecord = async (req, res) => {
  try {
    await RecordModel.destroy({
      where: {
        id_record: req.params.id,
      },
    });
    res.json({
      message: "¡Registro eliminado exitosamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = RecordController;
