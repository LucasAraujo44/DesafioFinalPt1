const mongoose = require ('mongoose')
const {status} = require('../Enum/enums')
const mongoosePaginate = require('mongoose-paginate-v2')

const FleetSchema = new mongoose.Schema(
    {
        id_car: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Car",
            required: true
        },
        id_rental: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rental",
            required: true
        },
        status: {
            type: String,
            required: true,
            enum: {
                values: [...status],
                message:  "Value is not supported ! ex: 'available', 'unavailable' or 'rented'  "
            }
        },
        daily_value: {
            type: String,
            required: true,
        },
        plate: {
            type: String,
            required: true,
            unique: true
        }
})
FleetSchema.plugin(mongoosePaginate)
const Fleet = mongoose.model("Fleet", FleetSchema)
module.exports = Fleet