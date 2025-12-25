const express = require('express')
const cors = require('cors')
const todoRoutes = require('./routes/todoRoutes')
const connectionDb = require('./config/connectionDb')

const app = express()
app.use(cors())
app.use(express.json())

connectionDb()

app.use('/api/todos', todoRoutes)

app.listen(3000, () => console.log("Server running on http://localhost3000"))