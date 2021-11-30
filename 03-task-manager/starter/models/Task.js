const mongoose = require('mongoose');

// defines the structure for the document
const TaskSchema = new mongoose.Schema({
    name:String,completed:Boolean
})

// model is the interface to the database

module.exports = mongoose.model('Task', TaskSchema)
