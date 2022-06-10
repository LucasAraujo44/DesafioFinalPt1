const RentalSchema = require('../schema/RentalSchema')

class RentalRepository {
   async create(payload) {
        return await RentalSchema.create(payload)
    }
    async list(payload) {
        const paginateFields = {
          totalDocs: "total",
          docs: "Rental",
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
        return RentalSchema.paginate(payload, options, {});
      }
      async updateRental(id, body) {
        return RentalSchema.findByIdAndUpdate(id, body);
      }
      async getById(payload) {
        return RentalSchema.findById(payload);
      }
      async deleteRental(payload) {
        return RentalSchema.findByIdAndDelete(payload);
      }
}
module.exports = new RentalRepository()