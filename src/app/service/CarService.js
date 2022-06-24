const CarRepository = require('../repository/CarRepository')
const IdNotFound = require('../Erros/IdNotFound')
const Car = require('../schema/CarSchema')
const badRequest = require('../Erros/badRequest')
class CarService {
  async create(payload) {
    const result = await CarRepository.create(payload)
    return result
  }
  async list(payload) {
    const result = await CarRepository.list(payload)
    return result
  }
  async updateCar(id, body) {
    const result = await CarRepository.updateCar(id, body);
    return result;
  }
  async getById(id) {
    const result = await CarRepository.getById(id);
    if (!result) {
      throw new IdNotFound(id)
    }
    return result;
  }
  async deleteCar(payload) {
    const result = await CarRepository.deleteCar(payload);
    return result;
  }
}

module.exports = new CarService()