const ReserveRepository = require('../repository/ReserveRepository')
const IdNotFound = require('../Erros/IdNotFound')

class ReserveService{
    async createReserve(id_rental, body){
        const result = await ReserveRepository.createReserve({...id_rental, ...body})
        return result
    }
    async listReserve(payload) {
        const result = await ReserveRepository.listReserve(payload)
        return result
    }
    async updateReserve(id, body) {
        const result = await ReserveRepository.updateReserve(id, body)
        if (!result) {
          throw new IdNotFound(id)
        }
        return result
      }
      async getByIdReserve(id) {
        const result = await ReserveRepository.getByIdReserve(id)
        if (!result) {
          throw new IdNotFound(id)
        }
        return result
      }
      async deleteReserve(id) {
        const result = await ReserveRepository.deleteReserve(id)
        if (!result) {
          throw new IdNotFound(id)
        }
        return result
      }
}
module.exports = new ReserveService ()