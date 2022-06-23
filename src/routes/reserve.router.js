const ReserveController = require('../app/controller/ReserveController')

module.exports = (server, routes, prefix = "/api/v1/rental") => {

    routes.post("/:id/reserve", ReserveController.createReserve)
    routes.get("/:id/reserve", ReserveController.listReserve)
    routes.put("/:id/reserve/:id", ReserveController.updateReserve)
    routes.get("/:id/reserve/:id", ReserveController.getByIdReserve)
    routes.delete("/:id/reserve/:id", ReserveController.deleteReserve)


    server.use(prefix, routes)
}