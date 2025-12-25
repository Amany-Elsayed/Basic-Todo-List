const express = require("express")
const { allTodos, addTodo } = require('../controller/todo-controller')

const router = express.Router()

router.get('/', allTodos)
router.post('/', addTodo)

module.exports = router