const PersonRepository = require("../repository/PersonRepository")
const Person = require("../schema/PersonSchema")

class PersonService {
    //Create
    async create(payload) {
        const result = await PersonRepository.create(payload)
        return result
    }
}
module.exports = new PersonService()