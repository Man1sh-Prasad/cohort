const mongoose = require("mongoose");

// connect to mongoDB
mongoose.connect('mongodb+srv://manish:Mongo8847@cluster0.ynkho4y.mongodb.net/todos');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})


const Todo = mongoose.model('Todo', todoSchema);

module.exports = { Todo }
