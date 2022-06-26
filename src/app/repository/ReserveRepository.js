const ReserveSchema = require ('../schema/ReserveSchema')

class ReserveRepository {
    async createReserve(id_rental, body){
        return await ReserveSchema.create(id_rental, body)
    }
    async listReserve(payload) {
        const paginateFields = {
          totalDocs: "total",
          docs: "Reserves",
          page: "offsets",
          nextPage: false,
          prevPage: false,
          pagingCounter: "false",
          meta: false,
          hasPrevPage: false,
          hasNextPage: false,
          limit: "limit"
        }
        const options = {
          page: 0,
          limit: 20,
          customLabels: paginateFields,
        }
        return ReserveSchema.paginate(payload, options, {})
      }
      async updateReserve(id, body) {
        return ReserveSchema.findByIdAndUpdate(id, body)
      }
      async getByIdReserve(id) {
        return ReserveSchema.findById(id)
    }
    async deleteReserve(payload) {
        return ReserveSchema.findByIdAndDelete(payload);
      }
}
module.exports = new ReserveRepository()