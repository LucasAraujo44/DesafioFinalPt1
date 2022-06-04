const mongoose = require('mongoose')
const mongoosePaginte = require('mongoose-paginate-v2')

const PersonSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    birthDay:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    canDrive: {
        type: String,
        required: true,
        enum: {
            values: ["yes", "no"],
            message: "Value is not supported"
        }
    }
})
PersonSchema.plugin(mongoosePaginte)
const Person = mongoose.model("Person",PersonSchema)
module.exports = Person