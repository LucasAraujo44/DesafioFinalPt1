const PersonRepository = require("../repository/PersonRepository")
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
require('dotenv').config()
//const authConfig = require('../../config/auth.json')
const Person = require("../schema/PersonSchema")

class AuthenticateService {
    //Create
     async create(email, password) {
        const result = await PersonRepository.findOneEmail(email)
        if (!result) {
            throw new Error('Person not found')
        }
        const test = await bcrypt.compare(password, result.password)
        if (!test) {

            throw new Error('Invalid password')

        }
        result.password = undefined
        const token = jwt.sign({ _id: Person.id}, process.env.SECRET,{
            expiresIn: 86400
        } )
         return ({result, token}) 

    } 

}
module.exports = new AuthenticateService()