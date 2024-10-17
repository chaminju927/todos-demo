//task에 관련된 스키마
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = Schema(
  {
    taskId: {
      type: Number,
      required: true,
      unique: true,
    },
    task: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
