const mongoose = require("mongoose");

// defines the structure for the document
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// model is the interface to the database

module.exports = mongoose.model("Task", TaskSchema);
