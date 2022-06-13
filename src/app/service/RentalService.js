const RentalRepository = require('../repository/RentalRepository')
const ZipCode = require('../validation/Rental/ZipCode')
class RentalService {
  async create(payload) {
    let i = 0
    do {
      const Zipcode = payload.address
      const address = Zipcode[i]
      const dado = await ZipCode.findZipCode(address.zipCode)
      const { cep, logradouro, complemento, bairro, localidade, uf } = dado
      address.zipCode = cep
      address.street = logradouro
      address.complement = complemento
      address.district = bairro
      address.city = localidade
      address.state = uf
      i += 1
    } while (i < payload.address.length)
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