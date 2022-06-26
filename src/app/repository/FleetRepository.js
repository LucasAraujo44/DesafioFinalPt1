const FleetSchema = require('../schema/FleetSchema')

class FleetRepository {
   async create(id_rental, body) {
        return await FleetSchema.create(id_rental, body)
    }
    async listFleet(payload) {
        const paginateFields = {
          totalDocs: "total",
          docs: "Feets",
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
        return FleetSchema.paginate(payload, options, {})
      }
      async updateFleet(id, body) {
        return FleetSchema.findByIdAndUpdate(id, body)
      }
      async getByIdFleet(id) {
        return FleetSchema.findById({_id: id})
    }
    async deleteFleet(payload) {
        return FleetSchema.findByIdAndDelete(payload);
      }
}
module.exports = new FleetRepository()