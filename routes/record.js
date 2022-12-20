const { Router } = require("express");
const recordRouter = Router();

const RecordController = require("../controllers/record.controller");

recordRouter.post("/", RecordController.createRecord);
recordRouter.get("/", RecordController.getAllRecords);
recordRouter.get("/:id", RecordController.getRecord);
recordRouter.put("/:id", RecordController.updateRecord);
recordRouter.delete("/:id", RecordController.deleteRecord);

module.exports = recordRouter;
