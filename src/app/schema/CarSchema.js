const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    accessories: [
        {
            description: {
                type: String,
                required: true,
            },
            _id: false


        }],
    passengersQtd: {
        type: String,
        required: true

    }


})

const Car = mongoose.model('Car', CarSchema)
module.exports = Car
