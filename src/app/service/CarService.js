const CarRepository = require('../repository/CarRepository')
const Car = require('../schema/CarSchema')
class CarService {
   async create(payload) {
        const result = await CarRepository.create(payload)
        return result
    }
}

module.exports = new CarService()