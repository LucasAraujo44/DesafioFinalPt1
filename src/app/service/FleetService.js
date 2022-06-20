const FleetRepository = require('../repository/FleetRepository')

class FleetService {
    async create(id_rental, body) {
        const result = await FleetRepository.create({...id_rental,...body} )
        return result
    }
    async listFleet(payload) {
        const result = await FleetRepository.listFleet(payload)
        return result
    }
    async updateFleet(id, body) {
        const result = await FleetRepository.updateFleet(id, body);
        return result
      }
      async getByIdFleet(payload) {
        const result = await FleetRepository.getByIdFleet(payload);
        return result
      }
      async deleteFleet(payload) {
        const result = await FleetRepository.deleteFleet(payload);
        return result
      }

}
module.exports = new FleetService()