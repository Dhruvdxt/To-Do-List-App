const mongoose = require("mongoose");
const db = require('../Config/MongoDB');
const User = require('./User');

const ToDoSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User.modelName
    },
    title: {
        type: String,
        required: true
    }, 
    desc: {
        type: String,
        required: true
    },
    showDesc: {
        type: Boolean,
        required: true
    }
});

const ToDOModel = mongoose.model('To-Do' , ToDoSchema);

module.exports = ToDOModel;