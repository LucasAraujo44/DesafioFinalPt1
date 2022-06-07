const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const bcrypt = require ('bcryptjs')


const PersonSchema = new mongoose.Schema(
    {
        name: {
            type: String,
           // required: true
        },
        cpf: {
            type: String,
            //required: true
        },
        birthDay: {
            type: String,
           // required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        canDrive: {
            type: String,
           // required: true,
            enum: {
                values: ["yes", "no"],
                message: "Value is not supported"
            }
        }
    })
    PersonSchema.pre('save', async function (next) {
        const hash = await bcrypt.hash(this.password, 10)
        this.password = hash
        next()
    }) 
PersonSchema.plugin(mongoosePaginate)
const Person = mongoose.model("Person", PersonSchema)


module.exports = Person