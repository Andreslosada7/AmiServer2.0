const { Router } = require("express");
const recordProductRouter = Router();

const RecordProductController = require("../controllers/recordproduct.controller");

recordProductRouter.post("/", RecordProductController.createRecordProduct);
recordProductRouter.get("/", RecordProductController.getAllRecordProducts);
recordProductRouter.get("/:id", RecordProductController.getRecordProduct);
recordProductRouter.put("/:id", RecordProductController.updateRecordProduct);
recordProductRouter.delete("/:id", RecordProductController.deleteRecordProduct);

module.exports = recordProductRouter;
