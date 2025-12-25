const mongoose = require('mongoose')

const connectionDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/basic_todo_list')
        console.log('MongoDB connected')
    } catch (error) {
        console.log((err))
        process.exit(1)
    }
}

module.exports = connectionDb