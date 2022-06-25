const PersonRepository = require("../repository/PersonRepository")
const IdNotFound = require('../Erros/IdNotFound')
const badRequest = require('../Erros/badRequest')
class PersonService {
    async create(payload) {
        const result = await PersonRepository.create(payload)
        if(!result){
          throw new badRequest(payload)
        }
        return result
    }
    async list(payload) {
        const result = await PersonRepository.list(payload)
        return result
    }
    async updatePerson(id, body) {
        const result = await PersonRepository.updatePerson(id, body)
        if (!result) {
          throw new IdNotFound(id)
        }
        return result
      }
      async getById(id) {
        const result = await PersonRepository.getById(id)
        if (!result) {
          throw new IdNotFound(id)
        }
        return result;
      }
      async deletePerson(id) {
        const result = await PersonRepository.deletePerson(id)
        if (!result) {
          throw new IdNotFound(id)
        }
        return result;
      }
}
module.exports = new PersonService()