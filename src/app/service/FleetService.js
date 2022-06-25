const FleetRepository = require('../repository/FleetRepository')
const IdNotFound = require('../Erros/IdNotFound')

class FleetService {
  async create(id_rental, body) {
    const result = await FleetRepository.create({ ...id_rental, ...body })
    return result
  }
  async listFleet(payload) {
    const result = await FleetRepository.listFleet(payload)
    return result
  }
  async updateFleet(id, body) {
    const result = await FleetRepository.updateFleet(id, body);
    if (!result) {
      throw new IdNotFound(id)
    }
    return result
  }
  async getByIdFleet(id) {
    const result = await FleetRepository.getByIdFleet(id);
    if (!result) {
      throw new IdNotFound(id)
    }
    return result
  }
  async deleteFleet(id) {
    const result = await FleetRepository.deleteFleet(id);
    if (!result) {
      throw new IdNotFound(id)
    }
    return result
  }

}
module.exports = new FleetService()