const RentalRepository = require('../repository/RentalRepository')
const Rental = require('../schema/RentalSchema')
class RentalService {
   async create(payload) {
        const result = await RentalRepository.create(payload)
        return result
    }
    async list(payload) {
        const result = await RentalRepository.list(payload)
        return result
    }
    async updateRental(id, body) {
        const result = await RentalRepository.updateRental(id, body);
        return result;
      }
      async getById(payload) {
        const result = await RentalRepository.getById(payload);
        return result;
      }
      async deleteRental(payload) {
        const result = await RentalRepository.deleteRental(payload);
        return result;
      }
}

module.exports = new RentalService()