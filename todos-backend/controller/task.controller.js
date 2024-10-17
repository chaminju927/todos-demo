const Task = require("../model/Task");

const taskController = {};

taskController.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const lastTask = await Task.findOne().sort({ taskId: -1 });

    // lastTask가 없으면 taskId=1 있으면 +1
    const newTaskId = lastTask && lastTask.taskId ? lastTask.taskId + 1 : 1;
    const newTask = new Task({
      taskId: newTaskId,
      task,
      isComplete,
    });

    await newTask.save();
    res.status(200).json({ status: "success", data: newTask });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

taskController.getTask = async (req, res) => {
  try {
    const taskList = await Task.find({}).select("-__v");
    res.status(200).json({ status: "succcess", data: taskList });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

taskController.putTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findOne({ taskId: Number(taskId) });

    task.isComplete = !task.isComplete;
    const updatedTask = await task.save();
    res.status(200).json({ status: "updated", data: updatedTask });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

taskController.deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    await Task.findOneAndDelete({ taskId: Number(taskId) });
    return res.status(200).json({ status: "success", message: "deleted" });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

module.exports = taskController;
