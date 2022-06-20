const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const RentalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cnpj: {
        type: String,
        required: true,
        
    },
    activities: {
        type: String,
        required: true
    },
    address: [
        { 
            zipCode: {
                type: String
            },
            street: {
                type: String
            },
            complement:{
                type: String
            },
            district:{
                type: String
            },
            number:{
                type: String
            },
            city:{
                type: String
            },
            state: {
                tipe: String
            },
            isFilial:{
                type: String,
                enum: {
                    values: ["true", "false"],
                    message: "Value is not supported ",
                  }
            },
            _id: false
        }]
})
RentalSchema.virtual("id_rental").get(function () {
    return this._id;
  })
  RentalSchema.set("toJSON", {
    virtuals: true,
    transform: (doc, converted) => {
      delete converted._id, delete converted.id;
    },
  })

RentalSchema.plugin(mongoosePaginate)
const Rental = mongoose.model('Rental', RentalSchema)
module.exports = Rental
