const ReserveRepository = require('../repository/ReserveRepository')

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
        const result = await ReserveRepository.updateReserve(id, body);
        return result
      }
      async getByIdReserve(payload) {
        const result = await ReserveRepository.getByIdReserve(payload);
        return result
      }
      async deleteReserve(payload) {
        const result = await ReserveRepository.deleteReserve(payload);
        return result
      }
}
module.exports = new ReserveService ()