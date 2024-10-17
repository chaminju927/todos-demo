const express = require("express");
const taskController = require("../controller/task.controller");
const router = express.Router();

router.post("/", taskController.createTask);

router.get("/", taskController.getTask);

router.put("/:taskId", taskController.putTask);

router.delete("/:taskId", taskController.deleteTask);

module.exports = router;
