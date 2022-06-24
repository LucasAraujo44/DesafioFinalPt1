const CarSchema = require('../schema/CarSchema')
class CarRepository {
   async create(payload) {
        return await CarSchema.create(payload)
    }
    async list(payload) {
        const paginateFields = {
          totalDocs: "total",
          docs: "Vehicles",
          page: "offsets",
          nextPage: false,
          prevPage: false,
          pagingCounter: "false",
          meta: false,
          hasPrevPage: false,
          hasNextPage: false,
          limit: "limit"
        };
        const options = {
          page: 0,
          limit: 20,
          customLabels: paginateFields,
        };
        return CarSchema.paginate(payload, options, {});
      }
      async updateCar(id, body) {
        return CarSchema.findByIdAndUpdate(id, body);
      }
      async getById(id) {
        return CarSchema.findById({ _id: id });
      }
      async deleteCar(payload) {
        return CarSchema.findByIdAndDelete(payload);
      }
}
module.exports = new CarRepository()