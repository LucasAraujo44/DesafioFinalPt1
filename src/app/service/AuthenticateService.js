const PersonRepository = require("../repository/PersonRepository")
const bcrypt = require('bcryptjs')
const Person = require("../schema/PersonSchema")

class AuthenticateService {
    //Create
    async create(email, password) {
        const result = await PersonRepository.findOneEmail(email)
        if (!result) {
            throw new Error('Bad required')
        }
        const test = await bcrypt.compare(password, result.password)
        if (!test) {

            throw new Error('Bad required')

        }
        result.password = undefined
        return result
    }
   
}
module.exports = new AuthenticateService()