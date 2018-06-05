const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchemaV1 = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    restaurante: {
        type: String,
        required: true
    }, photoUrl: {
        type: String,
        required: true
    }
})

module.exports = restful.model('Todo', todoSchemaV1);
