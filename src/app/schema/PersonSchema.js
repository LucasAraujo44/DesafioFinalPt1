const mongoose = require('mongoose')

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
        enum: {
            values: ["yes", "no"],
            message: "Value is not supported"
        }
    }
})
const Person = mongoose.model("Person",PersonSchema)
module.exports = Person