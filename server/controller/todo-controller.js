const Todo = require('../models/todo')

const allTodos = async (req, res) => {
    const todos = await Todo.find()
    res.json(todos)
}

const addTodo = async (req, res) => {
    const newTodo = new Todo({
        text: req.body.text
    })

    const savedTodo = await newTodo.save()
    res.json(savedTodo)
}

module.exports = {allTodos, addTodo}