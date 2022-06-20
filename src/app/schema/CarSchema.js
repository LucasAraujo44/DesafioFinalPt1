const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

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
        type: Number,
        required: true
    },
    accessories: [
        {
            description: {
                type: String
            },
        }],
    passengersQtd: {
        type: Number,
        required: true

    }
})
CarSchema.virtual("id_car").get(function () {
    return this._id;
  })
  CarSchema.set("toJSON", {
    virtuals: true,
    transform: (doc, converted) => {
      delete converted._id, delete converted.id;
    },
  })

CarSchema.plugin(mongoosePaginate)
const Car = mongoose.model('Car', CarSchema)
module.exports = Car
